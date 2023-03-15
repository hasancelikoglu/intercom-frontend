import { Center, Flex } from '@mantine/core'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavbarNested from '../components/Navbar/NavbarNested'
import Posts from '../components/Posts/Posts'
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
        <Flex>
            <NavbarNested/>
            <Center className={styles.main}>
                <Outlet/>
            </Center>
        </Flex>
    )
}