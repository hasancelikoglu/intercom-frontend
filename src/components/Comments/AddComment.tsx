import {
    createStyles,
    Avatar,
    Paper,
    Textarea,
    Flex,
    Button,
} from '@mantine/core';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { tokenAtom } from '../../atoms/authAtoms';
import { addComment } from '../../services/post';

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        marginTop: "5px",
    }
}));

export function AddComment({postId, setComments}: any) {
    const { classes } = useStyles();
    const [token] = useAtom(tokenAtom)
    const navigate = useNavigate()
    const [content, setContent] = useState("")


    const addCommentHandle = async(e:any) => {
        e.preventDefault()
        if(token) {
            if(content !== "") {
                try {
                    const response = await addComment(token, {id: postId, content: content})
                    console.log(response)
                    setComments((comments: any) => ([...comments, response.data]) )
                    toast.success("Comment added successfully")
                } catch (error: any) {
                    toast.error(error.response.data.message)
                }

                setContent("")
            } else {
                toast.error("Comment cannot be empty")
            }
        } else {
            navigate("/auth/login")
        }
    }

    return (
        <div style={{padding: "10px 0px 5px 30px"}}>
            <Paper withBorder radius="md" className={classes.comment}>
                <form onSubmit={addCommentHandle}>
                <Flex>
                    <Avatar src="" radius="xl" />
                    <Textarea
                    radius="sm"
                    ml={5}
                    placeholder="Send a comment..."
                    sx={{width: "100%"}}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    >

                    </Textarea>
                </Flex>

                <Flex justify="flex-end">
                    <Button type='submit' mt={10}>
                        Share
                    </Button>
                </Flex>
                </form>

            </Paper>

        </div>

    );
}