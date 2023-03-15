import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
} from '@mantine/core';

import {
    IconHeart,
    IconMessage
} from '@tabler/icons-react';

import styles from '../../styles/PostCard.module.css'

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

interface PostInfos {
    postedAt: string;
    body: string;
    author: {
        name: string;
        username: string;
        image: string;
    };
}

export function PostCard({ postedAt, body, author }: PostInfos) {
    const { classes } = useStyles();
    return (
        <Paper withBorder radius="md" className={classes.comment}>
            <Group>
                <Avatar src={author.image} alt={author.name} radius="xl" />
                <div className={styles.postInfos}>
                    <div className={styles.authorInfos}>
                        <Text fz="sm" className={styles.authorName}>{author.name}</Text>
                        <Text fz="xs" className={styles.authorUsername}>{author.username}</Text>
                    </div>
                    <Text fz="xs" c="dimmed">
                        {postedAt}
                    </Text>
                </div>

                <div className={styles.buttons}>
                    <div className={`${styles.button} ${styles.like}`}>

                    </div>
                    <div className={`${styles.button} ${styles.comment}`}>

                    </div>
                </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
                <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />

                <Group className={styles.buttons}>
                        <div className={`${styles.button} ${styles.like}`}>
                            <IconHeart strokeWidth={1} />
                            <span>43</span>
                        </div>
                        <div className={`${styles.button} ${styles.comment}`}>
                            <IconMessage strokeWidth={1} />
                            <span>17</span>
                        </div>
                </Group>
            </TypographyStylesProvider>




        </Paper>
    );
}