import { AppShell, Center, Flex, Navbar } from '@mantine/core'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavbarNested from '../components/Navbar/NavbarNested'
import Posts from '../components/Posts/Posts'
import ThemeButton from '../components/ThemeButton/ThemeButton'


export default function Home() {
    return (

        <AppShell
      padding="md"
      navbar={<NavbarNested/>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Center p={{base: "10px 30px", lg: "20px 100px"}}>
      <ThemeButton/>
        <Outlet/>
      </Center>
    </AppShell>
    )
}