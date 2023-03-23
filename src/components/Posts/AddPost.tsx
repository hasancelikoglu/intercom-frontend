import {
    createStyles,
    Avatar,
    Paper,
    rem,
    Textarea,
    Button,
    Flex,
} from '@mantine/core';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { tokenAtom } from '../../atoms/authAtoms';
import { postsAtom } from '../../atoms/postAtoms';
import { createPost } from '../../services/post';

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        marginTop: "30px"
    },

    body: {
        paddingLeft: rem(54),
        paddingTop: theme.spacing.sm,
        fontSize: theme.fontSizes.sm,
    },

    content: {
        '& > p:last-child': {
            marginBottom: 0,
        },


    },
}));

export function AddPost() {
    const { classes } = useStyles();
    const [token] = useAtom(tokenAtom)
    const [posts, setPosts] = useAtom(postsAtom)
    const [content, setContent] = useState("")
    type RegexType = RegExpMatchArray | null;
    const [hashtags, setHashtags] = useState<RegexType>(null);

    const findHashtags = (searchText: string) => {
        var regexp = /#[\w\u00C0-\u017F]+/g;
        let result = searchText.match(regexp);
        if (result) {
            setHashtags(result)
        } else {
            setHashtags(null)
        }
    }

    const addPostHandle = async () => {
        if (token && content !== "") {
            try {
                const formData = new FormData()
                formData.append("title", "burasi kaldirilacak")
                formData.append("content", content)
                const response = await createPost(token, formData)
                console.log(response.data)
                setContent("")
                setPosts([...posts, response.data])
                console.log(response)
            } catch (error: any) {
                setContent("")
                return toast.error(error.response.data.message)
            }
        } else if(content === "") {
            return toast.error("You need to write something.")
        }
    }

    useEffect(() => {
        findHashtags(content)
        if (content === "") {
            setHashtags(null)
        }
    }, [content])

    return (
        <Paper withBorder radius="md" className={classes.comment}>
            <Toaster />
            <Flex align="center" >
                <Avatar src="" alt="" radius="xl" />

                <Textarea style={{ width: "100%", marginLeft: "10px" }}
                    placeholder="What do you think? Tell us something..."
                    autosize
                    maxLength={250}
                    name="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

            </Flex>

            <Flex justify="space-between" ml={45} mt={10}>
                <div>
                    {hashtags && hashtags.map((hashtag, index) => (
                        <Button key={hashtag} bg="green" compact style={{ margin: "5px" }}>{hashtag}</Button>
                    ))}
                </div>
                <Button onClick={addPostHandle}>
                    Share
                </Button>
            </Flex>
        </Paper>
    );
}