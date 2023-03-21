import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function ThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
    sx={{position: "absolute", top: "20px", right: "20px"}}
      variant="dark"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size="1.5rem" /> : <IconMoonStars size="1.5rem" />}
    </ActionIcon>
  );
}

export default ThemeButton