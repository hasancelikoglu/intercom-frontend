import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Topics from './components/Topics/Topics';
import Home from './pages/Home';
import { EditProfile } from './components/Profile/EditProfile';
import { User } from './components/Profile/User';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFound } from './pages/404';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './atoms/authAtoms';

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

        <Route path='/auth/login' element={<Login/>} />
        <Route path='/auth/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </MantineProvider>
  );
}