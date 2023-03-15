import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
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
            <div style={{display: "flex", alignItems: "center"}}>
                <Avatar src="" alt="" radius="xl" />
                <textarea name='' id='' className={classes.body} placeholder='What do you think? Tell us something...' style={{resize: "none", width: "100%", padding: "10px", outline: "none", border: "none"}}></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button style={{padding: "5px 15px", backgroundColor: "green", border: "none", color: "white", borderRadius: "5px", cursor: "pointer"}}>Share</button>
            </div>
        </Paper>
    );
}