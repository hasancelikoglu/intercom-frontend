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
import { AddComment } from './AddComment';
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
        '& > p:last-child': {
            marginBottom: 0,
        },
    },
}));



export function PostCard({ post }: any) {
    const { classes } = useStyles();
    const [date, setDate] = useState("")
    const [liked, setLiked] = useState(post.isLiked)
    const [likeCounter, setLikeCounter] = useState(post.likes)
    const [commentCounter, setCommentCounter] = useState(post.comments.length)
    const [commentBox, setCommentBox] = useState(false)
    const [token] = useAtom(tokenAtom)
    const navigate = useNavigate()

    const likePostHandle = () => {
        // () => setLiked(liked => !liked)
        if (token) {
            if (liked) {

                (async () => {
                    setLikeCounter(likeCounter - 1)
                    setLiked(!liked)
                    const response = await unlikePost(token, post._id)
                    console.log(response)
                    
                })()

            } else {
                (async () => {
                    setLikeCounter(likeCounter + 1)
                    setLiked(!liked)
                    const response = await likePost(token, post._id)
                    console.log(response)
                    
                })()
            }
        } else {
            navigate("/auth/login")
        }
    }

    const commentPostHandle = () => {
        // () => setCommentBox(commentBox => !commentBox)
    }

    useEffect(() => {
        const now = new Date(post.createdDate)
        const date = now.toLocaleDateString('tr', { weekday: "long", month: "short", day: "numeric" })
        const time = now.toLocaleTimeString('tr', { hour: "2-digit", minute: "2-digit" })

        setDate(`${date} ${time}`)

    }, [date])

    return (
        <div>
            <Paper withBorder radius="md" className={classes.comment}>
                <Flex align="center" justify="space-between">
                    <Group>
                        <Avatar src="" radius="xl" />
                        <div className={styles.postInfos}>
                            <div className={styles.authorInfos}>
                                <Text fz="sm" className={styles.authorName}>Hasan Çelikoğlu</Text>
                                <Text fz="xs" className={styles.authorUsername}>@hasancelikoglu92</Text>
                            </div>
                            <Text fz="xs" c="dimmed">
                                {date}
                            </Text>
                        </div>
                    </Group>


                    <MenuButton />
                </Flex>
                <TypographyStylesProvider className={classes.body}>
                    <div className={classes.content} dangerouslySetInnerHTML={{ __html: post.content }} />

                    <Group className={styles.buttons}>
                        <div className={`${styles.button} ${styles.like}`}>
                            <IconHeart fill={liked ? "red" : "none"} onClick={likePostHandle} cursor="pointer" strokeWidth={1} />
                            <span>{likeCounter}</span>
                        </div>
                        <div className={`${styles.button} ${styles.comment}`}>
                            <IconMessage onClick={() => token ? setCommentBox(!commentBox) : navigate("/auth/login")} cursor="pointer" strokeWidth={1} />
                            <span>{commentCounter}</span>
                        </div>
                    </Group>
                </TypographyStylesProvider>



            </Paper>
            {commentBox && <AddComment />}

        </div>

    );
}