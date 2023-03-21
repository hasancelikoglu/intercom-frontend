import { createStyles, Card, Avatar, Text, Group, Button, rem } from '@mantine/core';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { userAtom } from '../../atoms/authAtoms';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}



export function User() {
  const { classes, theme } = useStyles();
  const [user] = useAtom(userAtom)
  const stats = [{label: "followers", value: user?.followersCount}, {label: "following", value: user?.followingCount}, {label: "posts", value: user?.postsCount}]

  const items = stats.map((stat, index) => (
    <div key={index}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" w="100%" className={classes.card}>
      <Card.Section sx={{backgroundImage: `url('')`, backgroundSize: "cover", height: 400 }} />
      <Avatar src="" size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {user?.name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {user?.username}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      {/* <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Follow
      </Button> */}
      
    </Card>
  );
}