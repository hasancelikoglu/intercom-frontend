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
import { useAtom } from 'jotai';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
import { userAtom } from '../atoms/authAtoms';
import { login } from '../services/auth';
import { getUser } from '../services/user';
import { setToken, setUserDatas } from '../utils/auth';

const useStyles = createStyles((theme) => ({
    wrapper: {
        height: "100vh",
        backgroundSize: 'cover',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },

    form: {
        borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        height: "100%",
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

interface LoginData {
    email: string;
    password: string;
}

export function Login() {
    const { classes } = useStyles();
    const navigate = useNavigate()
    const [data, setData] = useState<LoginData>({ email: "", password: "" })
    const [, setUser] = useAtom(userAtom)

    const disabled = data.email === "" || data.password === ""

    const loginHandle = async (e: any) => {
        e.preventDefault()
        try {
            const response = await login(data)
            const user = await getUser(response.data.accessToken)
            localStorage.setItem("token", response.data.accessToken)
            setUserDatas(response.data.accessToken, user.data)
            navigate("/")
        } catch (error: any) {
            return toast.error(error.response.data.message)
        }
    }

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <IconArrowBackUp onClick={() => navigate("/")} />
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Intercom!
                </Title>

                <form onSubmit={loginHandle}>
                    <TextInput value={data.email} onChange={e => setData((data: any) => ({ ...data, email: e.target.value }))} type="email" label="Email address" placeholder="hello@gmail.com" size="md" />
                    <PasswordInput value={data.password} onChange={e => setData((data: any) => ({ ...data, password: e.target.value }))} label="Password" placeholder="Your password" mt="md" size="md" />
                    <Button disabled={disabled} type='submit' fullWidth mt="xl" size="md">
                        Login
                    </Button>
                </form>

                <Text ta="center" mt="md">
                    Don&apos;t have an account?{' '}
                    <Anchor<'a'> href="/auth/register" weight={700}>
                        Register
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}