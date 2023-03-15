import { MantineProvider, Text } from '@mantine/core';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <Login />
      <Register/>
    </MantineProvider>
  );
}