import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
  Button,
  Flex,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { NavLink } from 'react-router-dom';
import { userAtom } from '../../atoms/authAtoms';

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

// interface UserButtonProps extends UnstyledButtonProps {
//   image: string;
//   name: string;
//   username: string;
//   email: string;
// }

export function UserButton() {
  
  const { classes } = useStyles();
  const [user] = useAtom(userAtom)

  return (
    <NavLink to={user ? "/auth/login" : "/user"}>
      <UnstyledButton className={classes.user}>
      {user ? (
        <Group>
        <Avatar src="" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {user.name}
          </Text>

          <Text color="dimmed" size="xs">
            {user.email}
          </Text>
        </div>
      </Group>
      ) : (
        <Flex justify="center" align="center">
            Login
        </Flex>
      )}
      </UnstyledButton>
      </NavLink >
    );
  }