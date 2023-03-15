import { Container, Flex, Text } from "@mantine/core"
import { NavLink } from "react-router-dom"

interface Topic {
    topic: {
        label: string,
        link: string
    }
}

export function Topic({ topic }: Topic) {
    return (
        <NavLink to={topic.link}>
        <Flex justify="center" align="stretch" bg="#ededed" p={20} style={{margin: "20px 0", borderRadius: "10px"}}>
                <Text color="black" size="1rem">
                    # {topic.label}
                </Text>
        </Flex>
        </NavLink>
    )
}