import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
    Textarea,
    Button,
    Flex,
} from '@mantine/core';

import styles from '../../styles/AddPost.module.css'

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
    return (
        <Paper withBorder radius="md" className={classes.comment}>
            <Flex align="center" >
                <Avatar src="" alt="" radius="xl" />

                <Textarea style={{ width: "100%", marginLeft: "10px" }}
                    placeholder="What do you think? Tell us something..."
                    autosize
                    maxLength={250}
                    name="content"
                />
            </Flex>
            <Flex justify="flex-end" mt={20}>
                <Button>
                    Share
                </Button>
            </Flex>
        </Paper>
    );
}