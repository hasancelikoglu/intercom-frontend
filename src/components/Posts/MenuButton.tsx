import { Menu, Button, rem, Flex } from '@mantine/core';
import { IconSearch, IconShare, IconTrash } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { userAtom } from '../../atoms/authAtoms';

export function MenuButton({postId, authorId}: any) {
  const [user] = useAtom(userAtom)
  const dots = ["dot", "dot", "dot"]
  return (
    <Menu>
      <Menu.Target>
        <Button variant="subtle">
          {dots.map((dot, index) => (
            <div key={index} style={{backgroundColor: "white", width: "4px", height: "4px", margin: "2px", borderRadius: "100%"}}></div>
          ))}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconShare size={14} />} onClick={() => navigator.clipboard.writeText(window.location.host + "/post/" + postId)}>Share</Menu.Item>
        {(user && user._id === authorId) && <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete post</Menu.Item>}
      </Menu.Dropdown>
    </Menu>
  );
}