import type { GlobalProvider } from '@ladle/react';
import { ThemeProvider } from '@sa2kit-ui/theme-runtime';
import '@sa2kit-ui/theme-animal-island/theme.css';
import '../src/docs.css';

export const Provider: GlobalProvider = ({ children }) => (
  <ThemeProvider defaultTheme="animal-island">
    <div className="sa2-font text-sa2-text-body">{children}</div>
  </ThemeProvider>
);
