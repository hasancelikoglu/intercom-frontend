import { MantineProvider, Text } from '@mantine/core';
import Home from './pages/Home';
import { Login } from './pages/Login';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Home/>
    </MantineProvider>
  );
}