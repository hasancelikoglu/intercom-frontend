import { Container, Text } from "@mantine/core";
import { Topic } from "./Topic";
const topics = [
    {label: "Topic 1", link: "topic-1"},
    {label: "Topic 2", link: "topic-2"},
    {label: "Topic 3", link: "topic-3"},
    {label: "Topic 4", link: "topic-4"},
    {label: "Topic 5", link: "topic-5"},
]

export default function Topics() {
    return (
        <>
            <Container w="100%" h={250}>
                <Text size={30}>Topics</Text>
                {topics.map((topic, index) => <Topic key={index} topic={topic} />)}
            </Container>
        </>

    )
}