import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
    Textarea,
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
            <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar src="" alt="" radius="xl" />

                <Textarea style={{ width: "100%", marginLeft: "10px"}}
                    placeholder="What do you think? Tell us something..."
                    autosize
                    maxLength={250}
                    name="content"
                />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                <button style={{ padding: "5px 15px", backgroundColor: "#228be6", border: "none", color: "white", borderRadius: "5px", cursor: "pointer" }}>Share</button>
            </div>
        </Paper>
    );
}