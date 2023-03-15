import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  username: string;
  email: string;
}

export function UserButton({ image, name, username, email }: UserButtonProps) {
  const { classes } = useStyles();

  return (
    <NavLink to={"/profile"}>
      <UnstyledButton className={classes.user}>
        <Group>
          <Avatar src={image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      </NavLink >
    );
  }