/** Batch-3: Tooltip / Select / Loading / Divider */
module.exports = {
  /* ========== Tooltip ========== */
  '.ai-tooltip-wrap': {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
  },
  '.ai-tooltip': {
    position: 'absolute',
    zIndex: '100',
    boxSizing: 'border-box',
    width: 'max-content',
    maxWidth: '240px',
    padding: '6px 12px',
    background: 'rgb(247, 243, 223)',
    borderRadius: '12px',
    boxShadow: '0 3px 10px rgba(61, 52, 40, 0.10)',
    color: '#725d42',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: '0.01em',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '.ai-tooltip-bordered': {
    border: '2px solid #c4b89e',
  },
  '.ai-tooltip-borderless': {
    border: 'none',
  },
  '.ai-tooltip-visible': {
    opacity: '1',
    pointerEvents: 'auto',
  },
  '.ai-tooltip-island': {
    maxWidth: '280px',
    padding: '12px 20px',
    borderRadius: '20px',
    fontWeight: '600',
    textAlign: 'center',
  },
  '.ai-tooltip-content': {
    whiteSpace: 'pre-line',
    wordBreak: 'break-word',
  },
  '.ai-tooltip-top': {
    bottom: 'calc(100% + 10px)',
    left: '50%',
    transform: 'translateX(-50%) translateY(4px)',
  },
  '.ai-tooltip-top.ai-tooltip-visible': { transform: 'translateX(-50%) translateY(0)' },
  '.ai-tooltip-top-start': { bottom: 'calc(100% + 10px)', left: '0', transform: 'translateY(4px)' },
  '.ai-tooltip-top-start.ai-tooltip-visible': { transform: 'translateY(0)' },
  '.ai-tooltip-top-end': { bottom: 'calc(100% + 10px)', right: '0', transform: 'translateY(4px)' },
  '.ai-tooltip-top-end.ai-tooltip-visible': { transform: 'translateY(0)' },
  '.ai-tooltip-bottom': {
    top: 'calc(100% + 10px)',
    left: '50%',
    transform: 'translateX(-50%) translateY(-4px)',
  },
  '.ai-tooltip-bottom.ai-tooltip-visible': { transform: 'translateX(-50%) translateY(0)' },
  '.ai-tooltip-bottom-start': { top: 'calc(100% + 10px)', left: '0', transform: 'translateY(-4px)' },
  '.ai-tooltip-bottom-start.ai-tooltip-visible': { transform: 'translateY(0)' },
  '.ai-tooltip-bottom-end': { top: 'calc(100% + 10px)', right: '0', transform: 'translateY(-4px)' },
  '.ai-tooltip-bottom-end.ai-tooltip-visible': { transform: 'translateY(0)' },
  '.ai-tooltip-left': {
    right: 'calc(100% + 10px)',
    top: '50%',
    transform: 'translateY(-50%) translateX(4px)',
  },
  '.ai-tooltip-left.ai-tooltip-visible': { transform: 'translateY(-50%) translateX(0)' },
  '.ai-tooltip-left-start': { right: 'calc(100% + 10px)', top: '0', transform: 'translateX(4px)' },
  '.ai-tooltip-left-start.ai-tooltip-visible': { transform: 'translateX(0)' },
  '.ai-tooltip-left-end': { right: 'calc(100% + 10px)', bottom: '0', transform: 'translateX(4px)' },
  '.ai-tooltip-left-end.ai-tooltip-visible': { transform: 'translateX(0)' },
  '.ai-tooltip-right': {
    left: 'calc(100% + 10px)',
    top: '50%',
    transform: 'translateY(-50%) translateX(-4px)',
  },
  '.ai-tooltip-right.ai-tooltip-visible': { transform: 'translateY(-50%) translateX(0)' },
  '.ai-tooltip-right-start': { left: 'calc(100% + 10px)', top: '0', transform: 'translateX(-4px)' },
  '.ai-tooltip-right-start.ai-tooltip-visible': { transform: 'translateX(0)' },
  '.ai-tooltip-right-end': { left: 'calc(100% + 10px)', bottom: '0', transform: 'translateX(-4px)' },
  '.ai-tooltip-right-end.ai-tooltip-visible': { transform: 'translateX(0)' },

  /* ========== Select ========== */
  '.ai-select': {
    position: 'relative',
    display: 'inline-block',
    minWidth: '140px',
    userSelect: 'none',
  },
  '.ai-select-trigger': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '8px 13px',
    background: '#fff',
    border: '2px solid #e8dcc8',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover:not(:disabled)': { borderColor: '#d4c4a8', background: '#fffdf7' },
  },
  '.ai-select-trigger-open': {
    borderColor: '#19c8b9',
  },
  '.ai-select-value': { fontSize: '14px', color: '#725d42', fontWeight: '600' },
  '.ai-select-placeholder': { fontSize: '14px', color: '#a09080' },
  '.ai-select-arrow': {
    color: '#a09080',
    display: 'flex',
    transition: 'transform 0.2s ease',
  },
  '.ai-select-trigger-open .ai-select-arrow': {
    transform: 'rotate(180deg)',
    color: '#19c8b9',
  },
  '.ai-select-dropdown': {
    position: 'absolute',
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: '6px',
    background: '#FFEEA0',
    borderRadius: '28px',
    padding: '12px 0',
    zIndex: '100',
    minWidth: '160px',
    animation: 'ai-fade-in 0.2s ease',
  },
  '.ai-select-option': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px 30px 10px 14px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#725d42',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textAlign: 'left',
  },
  '.ai-select-option-hovered, .ai-select-option-active': { fontWeight: '700' },
  '.ai-select-option-dot': { width: '16px', fontSize: '12px' },
  '.ai-select-pill-bar': {
    position: 'absolute',
    left: '20px',
    right: '20px',
    top: '56%',
    transform: 'translateY(-50%)',
    height: '14px',
    background: '#FFCC00',
    borderRadius: '7px',
    opacity: '0.3',
    zIndex: '-1',
  },
  '.ai-select-disabled': { opacity: '0.5', pointerEvents: 'none' },

  /* ========== Loading ========== */
  '.ai-loading': {
    position: 'absolute',
    inset: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000',
    overflow: 'hidden',
    zIndex: '1000',
  },
  '.ai-loading-spinner': {
    width: '48px',
    height: '48px',
    animation: 'ai-spin 1s linear infinite',
  },
  '.ai-loading-track': {
    stroke: 'rgba(25, 200, 185, 0.15)',
  },
  '.ai-loading-dash': {
    stroke: '#19c8b9',
    strokeLinecap: 'round',
    animation: 'ai-loading-dash 1.5s ease-in-out infinite',
  },

  /* ========== Divider ========== */
  '.ai-divider': {
    width: '100%',
    height: '12px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  '.ai-divider-line-brown': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, #d8d0c3 15%, #d8d0c3 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.ai-divider-line-teal': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, #19c8b9 15%, #19c8b9 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.ai-divider-line-white': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, #ffffff 15%, #ffffff 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.ai-divider-line-yellow': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, #f5d04a 15%, #f5d04a 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.ai-divider-wave-yellow': {
    height: '8px',
    backgroundImage:
      'radial-gradient(circle at 6px 8px, #f5d04a 6px, transparent 6px)',
    backgroundSize: '24px 16px',
    backgroundPosition: 'center bottom',
  },
  '.ai-divider-dashed-brown': {
    background: 'linear-gradient(to right, #c4b89e 50%, transparent 50%) center / 12px 2px repeat-x',
  },
  '.ai-divider-dashed-teal': {
    background: 'linear-gradient(to right, #19c8b9 50%, transparent 50%) center / 12px 2px repeat-x',
  },
  '.ai-divider-dashed-white': {
    background: 'linear-gradient(to right, #ffffff 50%, transparent 50%) center / 12px 2px repeat-x',
  },
  '.ai-divider-dashed-yellow': {
    background: 'linear-gradient(to right, #f5d04a 50%, transparent 50%) center / 12px 2px repeat-x',
  },
};
