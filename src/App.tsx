import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
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
import { tokenAtom, userAtom } from './atoms/authAtoms';
import { getUser } from './services/user';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const [token, setToken] = useAtom(tokenAtom)
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await getUser(token)
          setUser({
            email: response.data.email,
            name: response.data.name,
            avatar: "", username: "user" + response.data.username,
            followers: response.data.followers.length,
            following: response.data.following.length,
            posts: response.data.posts.length
          })
        } catch (error: any) {
          console.log(error)
        }
      })()
    }
  }, [])

  if ((token && user.user !== false) || (!token)) {
    return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme
          }}
        >

          <Routes>
            <Route path='/' element={<Home />} >
              <Route index element={<Posts />} />
              <Route path='user' element={<User />}>

              </Route>
              <Route path='profile/settings' element={<EditProfile />} />
              <Route path='topics' element={<Topics />} />
            </Route>

            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
}