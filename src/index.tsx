import { createRoot } from 'react-dom/client';
import { theme } from '@/Theme/theme';
import { ThemeProvider } from 'styled-components';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
