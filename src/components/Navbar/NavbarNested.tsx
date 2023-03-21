import { Navbar, Group, Code, ScrollArea, createStyles, rem, Burger } from '@mantine/core';
import {
  IconHome,
  IconHash,
  IconSettings,
  IconUser
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './LinksGroup';
import { NavLink } from 'react-router-dom';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms/authAtoms';

const mockdata = [
  { label: 'Home', icon: IconHome, link: "/" },
  { label: 'Profile', icon: IconUser, link: "/user"},

  {label: 'Topics', icon: IconHash, link: "/topics"},
  
  {
    label: 'Settings',
    icon: IconSettings,
    auth: true,
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
  const [user] = useAtom(userAtom)
  const links = mockdata.map((item) => user ? <LinksGroup {...item} key={item.label}/> : !item.auth && <LinksGroup {...item} key={item.label}/> );
  const matches = useMediaQuery('(max-width: 768px)')
  const [opened, { toggle }] = useDisclosure(false);
        const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div style={{padding: "20px 10px"}}>
    
    {matches && <Burger opened={opened} onClick={toggle} aria-label={label} />}
      {(opened || !matches) && (
        <Navbar height="100%" width={{base: "100%", sm: 300}} p="xl" className={classes.navbar}>
        <Navbar.Section className={classes.header}>
          <Group position="apart">
            {matches && <Burger style={{position: "absolute", left: "10px"}} opened={true} onClick={toggle} aria-label={label} />}
            <h3>Intercom</h3>
          </Group>
        </Navbar.Section>
  
        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div onClick={toggle} className={classes.linksInner}>{links}</div>
        </Navbar.Section>
  
        <Navbar.Section className={classes.footer}>
          <UserButton/>
        </Navbar.Section>
      </Navbar>
      )}
    </div>
  );
}