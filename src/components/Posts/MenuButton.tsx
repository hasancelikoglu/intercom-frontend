import { Menu, Button, rem, Flex } from '@mantine/core';
import { IconSearch, IconShare, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

export function MenuButton() {
  const dots = ["dot", "dot", "dot"]
  return (
    <Menu>
      <Menu.Target>
        <Button variant="subtle">
          {dots.map(dot => (
            <div style={{backgroundColor: "white", width: "4px", height: "4px", margin: "2px", borderRadius: "100%"}}></div>
          ))}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconShare size={14} />}>Share</Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete post</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}