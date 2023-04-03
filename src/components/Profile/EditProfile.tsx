import { Button, Container, Flex, Group, Modal, SimpleGrid, Text, TextInput, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { tokenAtom, userAtom } from "../../atoms/authAtoms";
import { changePassword } from "../../services/auth";
import { DropZone } from "./DropZone";

export function EditProfile() {
    const [user] = useAtom(userAtom)
    const [userData, setUserData] = useState({ name: user?.name, username: user?.username })
    const [opened, { open, close }] = useDisclosure(false);
    const [password, setPassword] = useState({ newPassword: "", newPasswordAgain: "" })
    const [token] = useAtom(tokenAtom)
    const [passwordChanged, setPasswordChanged] = useState(false)

    const changePasswordHandle = async (e: any) => {
        e.preventDefault()
        if (password.newPassword === password.newPasswordAgain && token) {
            try {
                const response = await changePassword(token, password.newPassword)
                console.log(response)
                toast.success("Password changed")
                setPasswordChanged(true)
                close()
            } catch (error: any) {
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("Passwords don't match")
        }
    }

    return (
        <Container w="100%">

            <Modal opened={opened} onClose={close} title="Change password" centered>
                <form onSubmit={changePasswordHandle} action="" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <TextInput
                        label="New password"
                        placeholder="Enter your new password"
                        name="newpassword"
                        variant="filled"
                        sx={{ width: "100%" }}
                        value={password.newPassword}
                        onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                    />
                    <TextInput
                        mt={20}
                        label="New password again"
                        placeholder="Enter your new password again"
                        name="newpasswordagain"
                        variant="filled"
                        sx={{ width: "100%" }}
                        value={password.newPasswordAgain}
                        onChange={(e) => setPassword({ ...password, newPasswordAgain: e.target.value })}
                    />

                    <Button type="submit" mt={20}>Save my password</Button>
                </form>

            </Modal>


            <Title
                order={2}
                size="h1"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
                weight={900}
                align="center"
            >
                Edit profile
            </Title>
            <Group>
                <Text>
                    Banner:
                </Text>
                <DropZone forImage="banner" />
            </Group>



            <Group mt={50}>
                <Text>
                    Profile Photo:
                </Text>
                <DropZone forImage="banner" />
            </Group>

            <Flex justify="center" mt={50}>
                <form style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>


                    <SimpleGrid cols={2} mt="xl" sx={{ width: "100%" }} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            name="name"
                            variant="filled"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                        <TextInput
                            label="Username"
                            placeholder="Your username"
                            name="username"
                            variant="filled"
                            value={userData.username}
                            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        />

                        <Text underline sx={{ cursor: "pointer" }} onClick={open}>I want to change my password</Text>

                    </SimpleGrid>
                    <Button mt={50} size="md">Save</Button>
                </form>
            </Flex>
        </Container >
    )
}