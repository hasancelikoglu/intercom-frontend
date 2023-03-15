import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import NavbarNested from './components/Navbar/NavbarNested';
import Posts from './components/Posts/Posts';
import Topics from './components/Topics/Topics';
import Home from './pages/Home';
import { Profile } from './Profile/Profile';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'light'
    }}
    >
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route index element={<Posts/>} />
          <Route path='profile' element={<Profile/>}>
            <Route path='settings' element={<h1>Profile settings</h1>} />
          </Route>
          <Route path='topics' element={<Topics/>} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}