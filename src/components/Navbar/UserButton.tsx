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

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  username: string;
  email: string;
}

export function UserButton({ image, name, username, email }: UserButtonProps) {
  const { classes } = useStyles();
  const [user] = useAtom(userAtom)

  return (
    <NavLink to={user.user === false ? "/auth/login" : "/user"}>
      <UnstyledButton className={classes.user}>
      {user.user !== false ? (
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
      ) : (
        <Flex justify="center" align="center">
            <Button w="100%">Login</Button>
        </Flex>
      )}
      </UnstyledButton>
      </NavLink >
    );
  }