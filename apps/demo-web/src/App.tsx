import { ThemeProvider } from '@sa2kit-ui/theme-runtime';
import Showcase from './Showcase';

export default function App() {
  return (
    <ThemeProvider defaultTheme="animal-island">
      <Showcase />
    </ThemeProvider>
  );
}
