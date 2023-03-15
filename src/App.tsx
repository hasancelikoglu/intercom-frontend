import { MantineProvider, Text } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Login } from './pages/Login';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="*" element={<h1>404 - Page not found!</h1>} />
      </Routes>
    </MantineProvider>
  );
}