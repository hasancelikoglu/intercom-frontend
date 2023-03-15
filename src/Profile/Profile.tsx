import { createStyles, Card, Avatar, Text, Group, Button, rem } from '@mantine/core';
import { useState } from 'react';
import { PostCard } from '../components/Posts/PostCard';

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

export function Profile() {
  const { classes, theme } = useStyles();

  const [user, setUser] = useState({image: "https://fastly.picsum.photos/id/524/1920/1080.webp?hmac=S77ntGrY6huW6aXgCxY0M6nqqYkgnu_t-I_FZKaWh5A", avatar: "", name: "Hasan Çelikoğlu", username: "@hasancelikoglu0", stats: [{label: "Followers", value: "32"}, {label: "Following", value: "17"}, {label: "Posts", value: "43"}]})

  const items = user.stats.map((stat) => (
    <div key={stat.label}>
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
      <Card.Section sx={{backgroundImage: `url(${user.image})`, backgroundSize: "cover", height: 400 }} />
      <Avatar src={user.avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {user.name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {user.username}
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