import { Button, Container, Flex, Group, SimpleGrid, Text, Textarea, TextInput, Title } from "@mantine/core";
import { DropZone } from "./DropZone";
import { useState } from "react";

export function EditProfile() {
    
    return (
        <Container w="100%">
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
                <form style={{width: "100%"}}>
                    

                    <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            name="name"
                            variant="filled"
                        />
                        <TextInput
                            label="Username"
                            placeholder="Your username"
                            name="username"
                            variant="filled"
                        />
                    </SimpleGrid>
                </form>
            </Flex>
        </Container>
    )
}