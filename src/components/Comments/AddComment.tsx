import {
    createStyles,
    Avatar,
    Paper,
    Textarea,
    Flex,
    Button,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        marginTop: "5px",
    }
}));

export function AddComment() {
    const { classes } = useStyles();

    return (
        <div style={{padding: "10px 0px 5px 30px"}}>
            <Paper withBorder radius="md" className={classes.comment}>
                <Flex>
                    <Avatar src="" radius="xl" />
                    <Textarea
                    radius="sm"
                    ml={5}
                    placeholder="Send a comment..."
                    sx={{width: "100%"}}
                    >

                    </Textarea>
                </Flex>

                <Flex justify="flex-end">
                    <Button mt={10}>
                        Share
                    </Button>
                </Flex>

            </Paper>

        </div>

    );
}