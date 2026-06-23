import Showcase from '@showcase';
import { ThemeProvider } from '@sa2kit-ui/theme-runtime';

export default function App() {
  return (
    <ThemeProvider defaultTheme="animal-island">
      <Showcase />
    </ThemeProvider>
  );
}
