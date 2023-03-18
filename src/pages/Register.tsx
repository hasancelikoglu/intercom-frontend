import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
} from '@mantine/core';
import { IconArrowBackUp } from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';
import { PasswordStrength } from '../components/Auth/PasswordInput';

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: 'cover',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },

    form: {
        borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

export function Register() {
    const { classes } = useStyles();
    const navigate = useNavigate()
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <IconArrowBackUp color='white' onClick={() => navigate(-1)} />
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Register to Intercom!
                </Title>

                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
                <TextInput label="Fullname" placeholder="John Doe" size="md" mt="md" />
                <PasswordStrength/>
                <Button fullWidth mt="xl" size="md">
                    Register
                </Button>

                <Text ta="center" mt="md">
                    Have an account ?{' '}
                    <Anchor<'a'> href="/auth/login" weight={700}>
                        Login
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}