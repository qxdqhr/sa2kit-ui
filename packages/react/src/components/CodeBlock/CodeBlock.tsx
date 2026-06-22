import { cn } from '@animal-island-components-sa2kit/shared';
import type { CodeBlockProps } from '@animal-island-components-sa2kit/shared';
import type { ReactNode } from 'react';

const COLORS = {
  comment: '#6b5e50',
  string: '#a8d4a0',
  keyword: '#d4a0e0',
  react: '#e06c75',
  component: '#80c0e0',
  func: '#61afef',
  prop: '#e8c87a',
  jsx: '#f0a870',
  operator: '#d4b896',
  number: '#a8d4a0',
  default: '#e8d5bc',
};

function highlightJSX(code: string): ReactNode[] {
  const tokens: { start: number; end: number; color: string }[] = [];

  const addPattern = (regex: RegExp, color: string) => {
    let match: RegExpExecArray | null;
    const re = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : `${regex.flags}g`);
    while ((match = re.exec(code)) !== null) {
      tokens.push({
        start: match.index,
        end: match.index + match[0].length,
        color,
      });
    }
  };

  addPattern(/\/\*[\s\S]*?\*\//g, COLORS.comment);
  addPattern(/\/\/.*$/gm, COLORS.comment);
  addPattern(/`[^`]*`/g, COLORS.string);
  addPattern(/"[^"]*"/g, COLORS.string);
  addPattern(/'[^']*'/g, COLORS.string);
  addPattern(/<\/?[A-Z][\w.$]*/g, COLORS.jsx);
  addPattern(/<\/?[a-z][\w-]*/g, COLORS.jsx);
  addPattern(/\/?>/g, COLORS.jsx);
  addPattern(
    /\b(React|useState|useEffect|useCallback|useMemo|useRef|useContext|useReducer|useLayoutEffect|useImperativeHandle|useDebugValue|createContext|createElement|cloneElement|Fragment|Suspense|lazy|memo|forwardRef|useId|FC|ReactNode|ReactElement|CSSProperties)\b/g,
    COLORS.react,
  );
  addPattern(/\b(true|false)\b/g, COLORS.keyword);
  addPattern(/\b(null|undefined|void|NaN|Infinity)\b/gi, COLORS.keyword);
  addPattern(/\b\d+\.?\d*\b/g, COLORS.number);
  addPattern(
    /\b(import|from|as|export|default|const|let|var|function|return|if|else|for|while|switch|case|break|continue|try|catch|throw|finally|new|typeof|instanceof|async|await|type|interface)\b/gi,
    COLORS.keyword,
  );
  addPattern(/\b[A-Z][a-zA-Z0-9_$]*\b/g, COLORS.component);
  addPattern(/\b[a-z][a-zA-Z0-9_$]*\s*(?=\()/g, COLORS.func);
  addPattern(/\b[a-zA-Z_$][\w$]*\s*(?==)/g, COLORS.prop);
  addPattern(/>|===|!==|==|!=|<=|>=|&&|\|\||[+\-*/%=<>!&|^~?:]/g, COLORS.operator);
  addPattern(/[{}[\]();,]/g, COLORS.operator);

  tokens.sort((a, b) => a.start - b.start);

  const result: ReactNode[] = [];
  let pos = 0;

  for (const token of tokens) {
    if (token.start < pos) continue;

    if (token.start > pos) {
      result.push(
        <span key={`t${pos}`} style={{ color: COLORS.default }}>
          {code.slice(pos, token.start)}
        </span>,
      );
    }

    result.push(
      <span key={`s${token.start}`} style={{ color: token.color }}>
        {code.slice(token.start, token.end)}
      </span>,
    );
    pos = token.end;
  }

  if (pos < code.length) {
    result.push(
      <span key={`e${pos}`} style={{ color: COLORS.default }}>
        {code.slice(pos)}
      </span>,
    );
  }

  return result;
}

export function CodeBlock({ code, style, className }: CodeBlockProps) {
  return (
    <pre className={cn('ai-codeblock', className)} style={style}>
      {highlightJSX(code)}
    </pre>
  );
}

CodeBlock.displayName = 'CodeBlock';
