/** Batch-3: Tooltip / Select / Loading / Divider */
module.exports = {
  /* ========== Tooltip ========== */
  '.sa2-tooltip-wrap': {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
  },
  '.sa2-tooltip': {
    position: 'absolute',
    zIndex: '100',
    boxSizing: 'border-box',
    width: 'max-content',
    maxWidth: '240px',
    padding: '6px 12px',
    background: 'var(--sa2-bg-content)',
    borderRadius: '12px',
    boxShadow: '0 3px 10px rgba(61, 52, 40, 0.10)',
    color: 'var(--sa2-text-body)',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: '0.01em',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '.sa2-tooltip-bordered': {
    border: '2px solid var(--sa2-border-light)',
  },
  '.sa2-tooltip-borderless': {
    border: 'none',
  },
  '.sa2-tooltip-visible': {
    opacity: '1',
    pointerEvents: 'auto',
  },
  '.sa2-tooltip-island': {
    maxWidth: '280px',
    padding: '12px 20px',
    borderRadius: '20px',
    fontWeight: '600',
    textAlign: 'center',
  },
  '.sa2-tooltip-content': {
    whiteSpace: 'pre-line',
    wordBreak: 'break-word',
  },
  '.sa2-tooltip-top': {
    bottom: 'calc(100% + 10px)',
    left: '50%',
    transform: 'translateX(-50%) translateY(4px)',
  },
  '.sa2-tooltip-top.sa2-tooltip-visible': { transform: 'translateX(-50%) translateY(0)' },
  '.sa2-tooltip-top-start': { bottom: 'calc(100% + 10px)', left: '0', transform: 'translateY(4px)' },
  '.sa2-tooltip-top-start.sa2-tooltip-visible': { transform: 'translateY(0)' },
  '.sa2-tooltip-top-end': { bottom: 'calc(100% + 10px)', right: '0', transform: 'translateY(4px)' },
  '.sa2-tooltip-top-end.sa2-tooltip-visible': { transform: 'translateY(0)' },
  '.sa2-tooltip-bottom': {
    top: 'calc(100% + 10px)',
    left: '50%',
    transform: 'translateX(-50%) translateY(-4px)',
  },
  '.sa2-tooltip-bottom.sa2-tooltip-visible': { transform: 'translateX(-50%) translateY(0)' },
  '.sa2-tooltip-bottom-start': { top: 'calc(100% + 10px)', left: '0', transform: 'translateY(-4px)' },
  '.sa2-tooltip-bottom-start.sa2-tooltip-visible': { transform: 'translateY(0)' },
  '.sa2-tooltip-bottom-end': { top: 'calc(100% + 10px)', right: '0', transform: 'translateY(-4px)' },
  '.sa2-tooltip-bottom-end.sa2-tooltip-visible': { transform: 'translateY(0)' },
  '.sa2-tooltip-left': {
    right: 'calc(100% + 10px)',
    top: '50%',
    transform: 'translateY(-50%) translateX(4px)',
  },
  '.sa2-tooltip-left.sa2-tooltip-visible': { transform: 'translateY(-50%) translateX(0)' },
  '.sa2-tooltip-left-start': { right: 'calc(100% + 10px)', top: '0', transform: 'translateX(4px)' },
  '.sa2-tooltip-left-start.sa2-tooltip-visible': { transform: 'translateX(0)' },
  '.sa2-tooltip-left-end': { right: 'calc(100% + 10px)', bottom: '0', transform: 'translateX(4px)' },
  '.sa2-tooltip-left-end.sa2-tooltip-visible': { transform: 'translateX(0)' },
  '.sa2-tooltip-right': {
    left: 'calc(100% + 10px)',
    top: '50%',
    transform: 'translateY(-50%) translateX(-4px)',
  },
  '.sa2-tooltip-right.sa2-tooltip-visible': { transform: 'translateY(-50%) translateX(0)' },
  '.sa2-tooltip-right-start': { left: 'calc(100% + 10px)', top: '0', transform: 'translateX(-4px)' },
  '.sa2-tooltip-right-start.sa2-tooltip-visible': { transform: 'translateX(0)' },
  '.sa2-tooltip-right-end': { left: 'calc(100% + 10px)', bottom: '0', transform: 'translateX(-4px)' },
  '.sa2-tooltip-right-end.sa2-tooltip-visible': { transform: 'translateX(0)' },

  /* ========== Select ========== */
  '.sa2-select': {
    position: 'relative',
    display: 'inline-block',
    minWidth: '140px',
    userSelect: 'none',
  },
  '.sa2-select-trigger': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '8px 13px',
    background: '#fff',
    border: '2px solid var(--sa2-border-dashed)',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover:not(:disabled)': { borderColor: 'var(--sa2-border-dashed-hover)', background: '#fffdf7' },
  },
  '.sa2-select-trigger-open': {
    borderColor: 'var(--sa2-primary)',
  },
  '.sa2-select-value': { fontSize: '14px', color: 'var(--sa2-text-body)', fontWeight: '600' },
  '.sa2-select-placeholder': { fontSize: '14px', color: '#a09080' },
  '.sa2-select-arrow': {
    color: '#a09080',
    display: 'flex',
    transition: 'transform 0.2s ease',
  },
  '.sa2-select-trigger-open .sa2-select-arrow': {
    transform: 'rotate(180deg)',
    color: 'var(--sa2-primary)',
  },
  '.sa2-select-dropdown': {
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
    animation: 'sa2-fade-in 0.2s ease',
  },
  '.sa2-select-option': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px 30px 10px 14px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--sa2-text-body)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textAlign: 'left',
  },
  '.sa2-select-option-hovered, .sa2-select-option-active': { fontWeight: '700' },
  '.sa2-select-option-dot': { width: '16px', fontSize: '12px' },
  '.sa2-select-pill-bar': {
    position: 'absolute',
    left: '20px',
    right: '20px',
    top: '56%',
    transform: 'translateY(-50%)',
    height: '14px',
    background: 'var(--sa2-focus)',
    borderRadius: '7px',
    opacity: '0.3',
    zIndex: '-1',
  },
  '.sa2-select-disabled': { opacity: '0.5', pointerEvents: 'none' },

  /* ========== Loading ========== */
  '.sa2-loading': {
    position: 'absolute',
    inset: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000',
    overflow: 'hidden',
    zIndex: '1000',
  },
  '.sa2-loading-spinner': {
    width: '48px',
    height: '48px',
    animation: 'sa2-spin 1s linear infinite',
  },
  '.sa2-loading-track': {
    stroke: 'rgba(25, 200, 185, 0.15)',
  },
  '.sa2-loading-dash': {
    stroke: 'var(--sa2-primary)',
    strokeLinecap: 'round',
    animation: 'sa2-loading-dash 1.5s ease-in-out infinite',
  },

  /* ========== Divider ========== */
  '.sa2-divider': {
    width: '100%',
    height: '12px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  '.sa2-divider-line-brown': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, #d8d0c3 15%, #d8d0c3 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.sa2-divider-line-teal': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, var(--sa2-primary) 15%, var(--sa2-primary) 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.sa2-divider-line-white': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, #ffffff 15%, #ffffff 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.sa2-divider-line-yellow': {
    backgroundImage:
      'linear-gradient(to right, transparent 0%, #f5d04a 15%, #f5d04a 85%, transparent 100%)',
    backgroundSize: '100% 2px',
  },
  '.sa2-divider-wave-yellow': {
    height: '8px',
    backgroundImage:
      'radial-gradient(circle at 6px 8px, #f5d04a 6px, transparent 6px)',
    backgroundSize: '24px 16px',
    backgroundPosition: 'center bottom',
  },
  '.sa2-divider-dashed-brown': {
    background: 'linear-gradient(to right, var(--sa2-border-light) 50%, transparent 50%) center / 12px 2px repeat-x',
  },
  '.sa2-divider-dashed-teal': {
    background: 'linear-gradient(to right, var(--sa2-primary) 50%, transparent 50%) center / 12px 2px repeat-x',
  },
  '.sa2-divider-dashed-white': {
    background: 'linear-gradient(to right, #ffffff 50%, transparent 50%) center / 12px 2px repeat-x',
  },
  '.sa2-divider-dashed-yellow': {
    background: 'linear-gradient(to right, #f5d04a 50%, transparent 50%) center / 12px 2px repeat-x',
  },
};
