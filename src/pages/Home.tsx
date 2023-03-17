import { Center, Flex } from '@mantine/core'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavbarNested from '../components/Navbar/NavbarNested'
import Posts from '../components/Posts/Posts'


export default function Home() {
    return (
        <Flex>
            <NavbarNested/>
            <Center w="100%" p="20px 100px" ml="300px">
                <Outlet/>
            </Center>
        </Flex>
    )
}