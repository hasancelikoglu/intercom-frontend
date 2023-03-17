import {
    createStyles,
    Avatar,
    Paper,
    rem,
    Textarea,
    Button,
    Flex,
} from '@mantine/core';
import { useEffect, useState } from 'react';

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
    const [content, setContent] = useState("")
    type RegexType = RegExpMatchArray | null;
    const [hashtags, setHashtags] = useState<RegexType>(null);

    const findHashtags = (searchText: string) => {
        var regexp = /\B\#\w+\b/g
        let result = searchText.match(regexp);
        if (result) {
            setHashtags(result)
        } else {
            setHashtags(null)
        }
    }

    useEffect(() => {
        findHashtags(content)
        if(content === "") {
            setHashtags(null)
        }
    }, [content])

    return (
        <Paper withBorder radius="md" className={classes.comment}>
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
                <Button key={hashtag} bg="green" compact  style={{margin: "5px"}}>{hashtag}</Button>
            ))}
            </div>
                <Button>
                    Share
                </Button>
            </Flex>
        </Paper>
    );
}