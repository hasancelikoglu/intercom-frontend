import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import NavbarNested from './components/Navbar/NavbarNested';
import Posts from './components/Posts/Posts';
import Topics from './components/Topics/Topics';
import Home from './pages/Home';
import { EditProfile } from './Profile/EditProfile';
import { User } from './Profile/User';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'dark'
    }}
    >
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route index element={<Posts/>} />
          <Route path='user' element={<User/>}>
            
          </Route>
          <Route path='profile/settings' element={<EditProfile/>} />
          <Route path='topics' element={<Topics/>} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}