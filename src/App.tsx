import { MantineProvider, Text } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
import { Register } from './pages/Register';
=======
import { Login } from './pages/Login';
>>>>>>> 0cfff5918b8613a334d7d76acdf44bc3af3d357a

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="*" element={<h1>404 - Page not found!</h1>} />
<<<<<<< HEAD
        <Route path="/" element={<Register/>} />
=======
>>>>>>> 0cfff5918b8613a334d7d76acdf44bc3af3d357a
      </Routes>
    </MantineProvider>
  );
}