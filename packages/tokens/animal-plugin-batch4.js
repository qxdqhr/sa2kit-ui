/** Batch-4: Time / Table / Icon / Footer */
module.exports = {
  /* ========== Time ========== */
  '.ai-time': {
    display: 'inline-flex',
    gap: '20px',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 'fit-content',
    maxWidth: 'max-content',
    padding: '16px 36px',
    background: 'linear-gradient(180deg, #fff 0%, #f8f8f0 100%)',
    border: '3px solid #d4cfc3',
    borderRadius: '18px',
    animation: 'ai-time-fade-up 0.5s ease-out',
    '@media (max-width: 768px)': {
      padding: '12px 20px',
      gap: '12px',
    },
  },
  '.ai-time-date': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: '24px',
    borderRight: '3px solid rgba(159, 146, 125, 0.35)',
    '@media (max-width: 768px)': {
      paddingRight: '12px',
    },
  },
  '.ai-time-weekday': {
    color: '#6fba2c',
    fontWeight: '900',
    fontSize: '14px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    '@media (max-width: 768px)': {
      fontSize: '11px',
    },
  },
  '.ai-time-monthday': {
    color: '#8b7355',
    fontWeight: '800',
    fontSize: '22px',
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
  '.ai-time-clock': {
    display: 'flex',
    alignItems: 'center',
    color: '#8b7355',
    fontWeight: '900',
    fontSize: '48px',
    letterSpacing: '2px',
    '@media (max-width: 768px)': {
      fontSize: '32px',
    },
  },
  '.ai-time-colon': {
    position: 'relative',
    top: '-0.08em',
    margin: '0 1px',
    fontSize: '48px',
    color: '#8b7355',
    animation: 'ai-time-blink 1s step-end infinite',
    '@media (max-width: 768px)': {
      fontSize: '32px',
    },
  },

  /* ========== Table ========== */
  '.ai-table-wrap': {
    position: 'relative',
    width: '100%',
    background: 'rgb(247, 243, 223)',
    borderRadius: '20px',
    padding: '6px',
    boxSizing: 'border-box',
  },
  '.ai-table-scrollable': {
    overflowX: 'auto',
    overflowY: 'auto',
  },
  '.ai-table': {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
  },
  '.ai-table-thead': {
    background: 'rgb(247, 243, 223)',
  },
  '.ai-table-header-row': {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '20px',
      right: '20px',
      bottom: '0',
      height: '1px',
      background:
        'repeating-linear-gradient(90deg, rgb(240, 232, 216) 0, rgb(240, 232, 216) 6px, transparent 6px, transparent 12px)',
      transition: 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  '.ai-table-header-cell': {
    padding: '16px 20px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#725d42',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    letterSpacing: '0.02em',
    background: 'transparent',
  },
  '.ai-table-tbody': {
    background: 'rgb(247, 243, 223)',
  },
  '.ai-table-row': {
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '20px',
      right: '20px',
      bottom: '0',
      height: '1px',
      background:
        'repeating-linear-gradient(90deg, rgb(240, 232, 216) 0, rgb(240, 232, 216) 6px, transparent 6px, transparent 12px)',
    },
    '&:hover': {
      backgroundImage:
        'repeating-linear-gradient(-45deg, rgba(25, 200, 185, 0.6), rgba(25, 200, 185, 0.6) 10px, rgba(14, 196, 182, 0.6) 10px, rgba(14, 196, 182, 0.6) 20px)',
      backgroundSize: '28.28px 28.28px',
      clipPath: 'inset(0 0 0 0 round 30px)',
      '&::after': { opacity: '0' },
      '& .ai-table-cell': { color: '#3d2e1e' },
    },
    '&:last-child::after': { display: 'none' },
  },
  '.ai-table-row-striped': {
    background: 'rgba(248, 248, 240, 0.6)',
    '&:hover': {
      backgroundImage:
        'repeating-linear-gradient(-45deg, rgba(25, 200, 185, 0.65), rgba(25, 200, 185, 0.65) 10px, rgba(14, 196, 182, 0.65) 10px, rgba(14, 196, 182, 0.65) 20px)',
      backgroundSize: '28.28px 28.28px',
      clipPath: 'inset(0 0 0 0 round 30px)',
      '&::after': { opacity: '0' },
      '& .ai-table-cell': { color: '#3d2e1e' },
    },
  },
  '.ai-table-cell': {
    padding: '14px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#725d42',
    lineHeight: '1.6',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '.ai-table-empty-cell': {
    padding: '60px 20px',
    textAlign: 'center',
  },
  '.ai-table-empty-content': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    color: '#9f927d',
    fontSize: '14px',
  },
  '.ai-table-empty-icon': {
    color: '#9f927d',
    opacity: '0.5',
  },
  '.ai-table-loading': {
    opacity: '0.7',
    pointerEvents: 'none',
  },
  '.ai-table-loading-overlay': {
    position: 'absolute',
    inset: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(247, 243, 223, 0.8)',
    backdropFilter: 'blur(2px)',
  },
  '.ai-table-loading-spinner': {
    color: '#19c8b9',
    animation: 'ai-spin 1s linear infinite',
    '& circle': {
      animation: 'ai-loading-dash 1.5s ease-in-out infinite',
    },
  },

  /* ========== Icon ========== */
  '.ai-icon': {
    display: 'inline-block',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  '.ai-icon-bounce:hover': {
    animation: 'ai-icon-bounce 0.3s ease-in-out forwards',
  },

  /* ========== CodeBlock ========== */
  '.ai-codeblock': {
    padding: '20px 24px',
    background: '#2b2118',
    border: '1px solid #3d3028',
    borderRadius: '20px',
    fontSize: '14px',
    lineHeight: '1.7',
    fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
    fontWeight: '600',
    color: '#e8d5bc',
    whiteSpace: 'pre',
    overflow: 'auto',
    tabSize: '4',
  },

  /* ========== Footer ========== */
  '.ai-footer': {
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  '.ai-footer-sea': {
    height: '80px',
    backgroundSize: 'contain',
  },
  '.ai-footer-tree': {
    height: '60px',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    backgroundImage:
      'linear-gradient(to top, #6fba2c 0%, #6fba2c 35%, transparent 35%), radial-gradient(ellipse 18px 28px at 8% 100%, #4a8a18 70%, transparent 71%), radial-gradient(ellipse 22px 34px at 22% 100%, #5a9e1e 70%, transparent 71%), radial-gradient(ellipse 26px 40px at 40% 100%, #6fba2c 70%, transparent 71%), radial-gradient(ellipse 20px 32px at 58% 100%, #4a8a18 70%, transparent 71%), radial-gradient(ellipse 24px 38px at 76% 100%, #5a9e1e 70%, transparent 71%), radial-gradient(ellipse 18px 28px at 92% 100%, #6fba2c 70%, transparent 71%)',
  },
};
