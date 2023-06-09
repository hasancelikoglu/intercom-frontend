import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
    Flex,
} from '@mantine/core';

import {
    IconHeart,
    IconMessage
} from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tokenAtom } from '../../atoms/authAtoms';
import { likePost, unlikePost } from '../../services/post';

import styles from '../../styles/PostCard.module.css'
import { generateDate } from '../../utils/post';
import { AddComment } from '../Comments/AddComment';
import Comments from '../Comments/Comments';
import { MenuButton } from './MenuButton';

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
        fontSize: rem(20),
        '& > p:last-child': {
            marginBottom: 0,
        },
    },
}));



export function PostCard({ post, specific }: any) {
    const { classes } = useStyles();
    const [token] = useAtom(tokenAtom)
    const [date, setDate] = useState("")
    const [liked, setLiked] = useState(post.isLiked)
    const [likeCounter, setLikeCounter] = useState(post.likes)
    const [comments, setComments] = useState(post.comments)
    const [commentBox, setCommentBox] = useState(false)
    const [allCommentsBox, setAllCommentsBox] = useState(false)
    const navigate = useNavigate()

    const likePostHandle = () => {
        if (token) {
            setLikeCounter(liked ? likeCounter - 1 : likeCounter + 1)
            setLiked(!liked)
            if (liked) {
                (async () => {
                    await unlikePost(token, post._id)
                })()

            } else {
                (async () => {
                    await likePost(token, post._id)

                })()
            }
        } else {
            navigate("/auth/login")
        }
    }

    const commentPostHandle = () => {
        // () => setCommentBox(commentBox => !commentBox)
        if (!specific) {
            if (token) {
                setCommentBox(!commentBox)
                setAllCommentsBox(!allCommentsBox)
            } else {
                setAllCommentsBox(!allCommentsBox)
            }
        }
    }

    useEffect(() => {
        setDate(generateDate(post.createdDate))

    }, [])

    return (
        <div>
            <Paper withBorder radius="md" className={classes.comment}>
                <Flex align="center" justify="space-between">
                    <Group>
                        <Avatar src="" radius="xl" />
                        <div className={styles.postInfos}>
                            <div className={styles.authorInfos}>
                                <Text fz="sm" className={styles.authorName}>{post.author?.name}</Text>
                                <Text fz="xs" className={styles.authorUsername}>@{post.author?.username}</Text>
                            </div>
                            <Text fz="xs" c="dimmed">
                                {date}
                            </Text>
                        </div>
                    </Group>


                    <MenuButton postId={post._id} authorId={post.author?._id} />
                </Flex>
                <TypographyStylesProvider className={classes.body}>
                    <div className={classes.content} dangerouslySetInnerHTML={{ __html: post.content }} />

                    <Group className={styles.buttons}>
                        <div className={`${styles.button} ${styles.like}`}>
                            <IconHeart fill={liked ? "red" : "none"} onClick={likePostHandle} cursor="pointer" strokeWidth={1} />
                            <span>{likeCounter}</span>
                        </div>
                        <div className={`${styles.button} ${styles.comment}`}>
                            <IconMessage onClick={commentPostHandle} cursor="pointer" strokeWidth={1} />
                            <span>{comments.length}</span>
                        </div>
                    </Group>
                </TypographyStylesProvider>



            </Paper>
            {commentBox && <AddComment setComments={setComments} postId={post._id} />}
            {allCommentsBox && comments.length > 0 && <Comments comments={comments} />}

        </div>

    );
}