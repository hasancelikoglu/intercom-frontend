import { Menu, Button, rem, Flex, useMantineColorScheme } from '@mantine/core';
import { IconSearch, IconShare, IconTrash } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { tokenAtom, userAtom } from '../../atoms/authAtoms';
import { postsAtom, PostType } from '../../atoms/postAtoms';
import { deletePost } from '../../services/post';

export function MenuButton({postId, authorId}: any) {
  const theme = useMantineColorScheme()
  const [user] = useAtom(userAtom)
  const [posts, setPosts] = useAtom(postsAtom)
  const [token] = useAtom(tokenAtom)
  const dots = ["dot", "dot", "dot"]
  const navigate = useNavigate()

  const deletePostHandle = () => {
    let newPosts = posts?.filter(p => p._id !== postId)
    if(token) {
      (async() => {
        try {
          const response = await deletePost(postId, token)
          setPosts(newPosts as PostType[])
          navigate("/")
          return toast.success(response.data.message)
        } catch (error: any) {
          return toast.error(error.response.data.message)
        }
      })()
    }
    
  }
  return (
    <Menu>
      <Menu.Target>
        <Button variant="subtle">
          {dots.map((dot, index) => (
            <div key={index} style={{backgroundColor: theme.colorScheme === "dark" ? "white" : "black", width: "4px", height: "4px", margin: "2px", borderRadius: "100%"}}></div>
          ))}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconShare size={14} />} onClick={() => navigator.clipboard.writeText(window.location.host + "/post/" + postId)}>Share</Menu.Item>
        {(user && user._id === authorId) && <Menu.Item color="red" icon={<IconTrash size={14} />} onClick={deletePostHandle} >Delete post</Menu.Item>}
      </Menu.Dropdown>
    </Menu>
  );
}