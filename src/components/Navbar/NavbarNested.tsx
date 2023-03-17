import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconHome,
  IconHash,
  IconSettings,
  IconUser
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './LinksGroup';
import { NavLink } from 'react-router-dom';

const mockdata = [
  { label: 'Home', icon: IconHome, link: "/" },
  { label: 'Profile', icon: IconUser, link: "/user" },

  {label: 'Topics', icon: IconHash, link: "/topics"},
  
  {
    label: 'Settings',
    icon: IconSettings,
    link: "",
    links: [
      { label: 'Profile settings', link: '/profile/settings' },
      { label: 'Logout', link: '/logout' }
    ],
  }
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    position: "fixed"
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    display: "flex",
    justifyContent: "center"
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) =>  <LinksGroup {...item} key={item.label}/>);

  return (
    <Navbar height="100%" width={{ sm: 300, xs: 70 }} p="xl" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group display={{sm: "block", xs: "none"}} position="apart">
          {/* <Logo width={rem(120)} /> */}
          <h3>SOCIAL MEDIA APP</h3>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image=""
          name="Hasan Çelikoğlu"
          username="hasancelikoglu92"
          email="hasancelikoglu92@gmail.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}