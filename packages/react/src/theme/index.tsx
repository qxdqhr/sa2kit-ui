import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Sa2ThemeId = 'animal-island' | 'tech' | 'jieyuan-garden' | 'rhine-life' | 'endfield' | 'mizuki-roguelike' | 'sami-roguelike';

export interface ThemeContextValue {
  theme: Sa2ThemeId;
  setTheme: (theme: Sa2ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  /** 默认主题 */
  defaultTheme?: Sa2ThemeId;
  /** 受控主题 */
  theme?: Sa2ThemeId;
  onThemeChange?: (theme: Sa2ThemeId) => void;
  children: ReactNode;
}

function applyThemeToDocument(theme: Sa2ThemeId) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
}

export function ThemeProvider({
  defaultTheme = 'animal-island',
  theme: controlledTheme,
  onThemeChange,
  children,
}: ThemeProviderProps) {
  const [internalTheme, setInternalTheme] = useState<Sa2ThemeId>(defaultTheme);
  const theme = controlledTheme ?? internalTheme;

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  const setTheme = useCallback(
    (next: Sa2ThemeId) => {
      if (controlledTheme === undefined) setInternalTheme(next);
      applyThemeToDocument(next);
      onThemeChange?.(next);
    },
    [controlledTheme, onThemeChange],
  );

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}

export const SA2_THEMES: { id: Sa2ThemeId; label: string }[] = [
  { id: 'animal-island', label: '动森岛' },
  { id: 'jieyuan-garden', label: '界园' },
  { id: 'rhine-life', label: '莱茵生命' },
  { id: 'endfield', label: '终末地' },
  { id: 'mizuki-roguelike', label: '水月肉鸽' },
  { id: 'sami-roguelike', label: '萨米肉鸽' },
  { id: 'tech', label: '科技风' },
];
