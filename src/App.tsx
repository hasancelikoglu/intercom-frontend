import { MantineProvider, Text } from '@mantine/core';
import { Login } from './pages/Login';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <Login />
    </MantineProvider>
  );
}