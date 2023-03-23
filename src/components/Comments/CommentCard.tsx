import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
  } from '@mantine/core';
import { useEffect, useState } from 'react';
import { generateDate } from '../../utils/post';
  
  const useStyles = createStyles((theme) => ({
    comment: {
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
      margin: "10px 0 0 30px"
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

  interface CommentType {
    _id: string;
    author: string;
    post: string;
    content: string;
    createdDate: string;
  }
  
  interface CommentHtmlProps {
    comment: CommentType
  }
  
  export function CommentCard({ comment }: CommentHtmlProps) {
      const [date, setDate] = useState("")
      const { classes } = useStyles();
    useEffect(() => {
        setDate(generateDate(comment.createdDate))
    }, [])
    return (
      <Paper  withBorder radius="md" className={classes.comment}>
        <Group>
          <Avatar src="" alt="" radius="xl" />
          <div>
            <Text fz="sm">Hasan Çelikoğlu</Text>
            <Text fz="xs" c="dimmed">
              {date}
            </Text>
          </div>
        </Group>
        <TypographyStylesProvider className={classes.body}>
          <div className={classes.content} dangerouslySetInnerHTML={{ __html: comment.content }} />
        </TypographyStylesProvider>
      </Paper>
    );
  }