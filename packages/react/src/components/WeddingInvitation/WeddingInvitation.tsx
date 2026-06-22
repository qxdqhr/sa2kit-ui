import type {
  WeddingInvitationExportButtonProps,
  WeddingInvitationProps,
  WeddingInvitationRef,
} from '@animal-island-components-sa2kit/shared';
import { cn } from '@animal-island-components-sa2kit/shared';
import { domToCanvas } from 'modern-screenshot';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Icon } from '../Icon';
import { injectWeddingFonts, prepareWeddingFontsForExport } from './weddingFonts';
import './weddingInvitation.css';

injectWeddingFonts();

const NOTCH_RADIUS = 14;
const LOTTERY_HEIGHT = 160;

function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" width="56" height="56" aria-hidden>
      <path
        d="M8 56 C 8 24, 32 4, 60 6 C 58 36, 38 58, 8 56 Z"
        fill="#8ac68a"
        stroke="#3d5a1a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 50 C 26 40, 40 26, 56 12"
        stroke="#3d5a1a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Flower({
  color = '#f8a6b2',
  center = '#f7cd67',
  size = 28,
}: {
  color?: string;
  center?: string;
  size?: number;
}) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden>
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="16"
          cy="8"
          rx="5"
          ry="7"
          fill={color}
          stroke="#725d42"
          strokeWidth="1.2"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
      <circle cx="16" cy="16" r="3.5" fill={center} stroke="#725d42" strokeWidth="1.2" />
    </svg>
  );
}

function Heart({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden>
      <path
        d="M32 56 C 8 40, 4 22, 16 14 C 24 9, 30 14, 32 20 C 34 14, 40 9, 48 14 C 60 22, 56 40, 32 56 Z"
        fill="#fc736d"
        stroke="#725d42"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star({ size = 18, color = '#f7cd67' }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <path
        d="M12 2 L14.5 9 L22 9.5 L16 14.5 L18 22 L12 17.5 L6 22 L8 14.5 L2 9.5 L9.5 9 Z"
        fill={color}
        stroke="#725d42"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" aria-hidden>
      <g fill="none" stroke="#725d42" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="6" cy="18" r="2.4" />
        <path d="M8 7.5 L21 17 M8 16.5 L21 7" />
      </g>
    </svg>
  );
}

function BrideGroomIllustration() {
  return (
    <svg className="ai-wedding-couple-svg" viewBox="0 0 280 120" aria-hidden>
      <ellipse cx="90" cy="95" rx="55" ry="18" fill="rgba(114,93,66,0.12)" />
      <ellipse cx="190" cy="95" rx="55" ry="18" fill="rgba(114,93,66,0.12)" />
      <circle cx="90" cy="52" r="28" fill="#f8a6b2" stroke="#725d42" strokeWidth="2.5" />
      <circle cx="190" cy="52" r="28" fill="#82d5bb" stroke="#725d42" strokeWidth="2.5" />
      <ellipse cx="90" cy="88" rx="22" ry="26" fill="#fdfdf5" stroke="#725d42" strokeWidth="2" />
      <ellipse cx="190" cy="88" rx="22" ry="26" fill="#fdfdf5" stroke="#725d42" strokeWidth="2" />
      <circle cx="82" cy="48" r="3" fill="#725d42" />
      <circle cx="98" cy="48" r="3" fill="#725d42" />
      <circle cx="182" cy="48" r="3" fill="#725d42" />
      <circle cx="198" cy="48" r="3" fill="#725d42" />
      <path d="M82 58 Q90 64 98 58" stroke="#725d42" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M182 58 Q190 64 198 58" stroke="#725d42" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        d="M12 3v12m0 0l-5-5m5 5l5-5M4 17v3a1 1 0 001 1h14a1 1 0 001-1v-3"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const exportNodeAsPng = async (node: HTMLElement, filename: string, scale = 2): Promise<void> => {
  const fontCssText = await prepareWeddingFontsForExport();
  const prevMask = node.style.maskImage;
  const prevWebkitMask = (node.style as CSSStyleDeclaration & { webkitMaskImage?: string }).webkitMaskImage;
  node.style.maskImage = 'none';
  (node.style as CSSStyleDeclaration & { webkitMaskImage?: string }).webkitMaskImage = 'none';

  const fontStyleEl = document.createElement('style');
  fontStyleEl.setAttribute('data-wedding-export-fonts', '');
  fontStyleEl.textContent = fontCssText;
  node.insertBefore(fontStyleEl, node.firstChild);

  try {
    const canvas = await domToCanvas(node, {
      scale,
      backgroundColor: undefined,
      font: { cssText: fontCssText },
    });

    const ctx = canvas.getContext('2d');
    if (ctx) {
      const r = NOTCH_RADIUS * scale;
      const y = canvas.height - LOTTERY_HEIGHT * scale;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      for (const x of [0, canvas.width]) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    const dataUrl = canvas.toDataURL('image/png');
    if (!dataUrl || dataUrl === 'data:,') {
      throw new Error('modern-screenshot 返回空 dataURL');
    }

    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = filename.endsWith('.png') ? filename : `${filename}.png`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  } finally {
    fontStyleEl.remove();
    node.style.maskImage = prevMask;
    (node.style as CSSStyleDeclaration & { webkitMaskImage?: string }).webkitMaskImage = prevWebkitMask;
  }
};

export const WeddingInvitation = forwardRef<WeddingInvitationRef, WeddingInvitationProps>(
  (
    {
      groomName = '小狸',
      brideName = '小兔',
      date = '2026.06.15',
      weekday = '星期六',
      time = '10:00 AM',
      venue = '彩虹岛 · 樱花广场',
      address = '动物之森 · 无人岛 · K.K. 演奏台前',
      title = 'Wedding Invitation',
      subtitle = <span className="ai-wedding-subtitle-text">集合啦 婚礼森友会</span>,
      message = '哎呀，恭喜恭喜！我们要在小岛上举办婚礼啦~ 诚挚邀请您一同前来见证这个被花瓣和音符包围的日子！',
      showLotteryNumber = true,
      lotteryNumber = '0001',
      lotteryLabel = 'LUCKY NUMBER',
      lotteryHint = '凭此号码参与现场抽奖 · Keep this stub for the lucky draw',
      className,
      style,
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null);

    const exportAsImage = useCallback(async (filename = 'wedding-invitation') => {
      if (!rootRef.current) return;
      await exportNodeAsPng(rootRef.current, filename);
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        exportAsImage,
        getElement: () => rootRef.current,
      }),
      [exportAsImage],
    );

    return (
      <div
        ref={rootRef}
        className={cn('ai-wedding-envelope', !showLotteryNumber && 'ai-wedding-no-lottery', className)}
        style={style}
      >
        <Leaf className={cn('ai-wedding-corner-leaf', 'ai-wedding-tl')} />
        <Leaf className={cn('ai-wedding-corner-leaf', 'ai-wedding-tr')} />
        <Leaf className={cn('ai-wedding-corner-leaf', 'ai-wedding-bl')} />
        <Leaf className={cn('ai-wedding-corner-leaf', 'ai-wedding-br')} />

        <span className={cn('ai-wedding-float-item', 'ai-wedding-f1')}>
          <Flower color="#f8a6b2" />
        </span>
        <span className={cn('ai-wedding-float-item', 'ai-wedding-f2')}>
          <Flower color="#ecdf52" center="#e59266" size={22} />
        </span>
        <span className={cn('ai-wedding-float-item', 'ai-wedding-f3')}>
          <Flower color="#b77dee" size={20} />
        </span>
        <span className={cn('ai-wedding-float-item', 'ai-wedding-s1')}>
          <Star color="#f7cd67" />
        </span>
        <span className={cn('ai-wedding-float-item', 'ai-wedding-s2')}>
          <Star color="#82d5bb" size={14} />
        </span>

        <div className="ai-wedding-banner">
          <span className="ai-wedding-banner-line" />
          <Star size={16} color="#f7cd67" />
          <span className="ai-wedding-banner-line" />
        </div>

        <div className="ai-wedding-title-en">{title}</div>
        <div className="ai-wedding-title-zh">{subtitle}</div>

        <div className="ai-wedding-couple-img">
          <BrideGroomIllustration />
        </div>

        <div className="ai-wedding-couple-row">
          <div className="ai-wedding-mascot">
            <div className="ai-wedding-name">{brideName}</div>
          </div>
          <div className="ai-wedding-heart-col">
            <Heart size={30} />
          </div>
          <div className="ai-wedding-mascot">
            <div className="ai-wedding-name">{groomName}</div>
          </div>
        </div>

        <div className="ai-wedding-date-card">
          <div className="ai-wedding-date-label">婚礼时间</div>
          <div className="ai-wedding-date-value">{date}</div>
          <div className="ai-wedding-date-meta">
            <span>{weekday}</span>
            <span className="ai-wedding-dot">·</span>
            <span>{time}</span>
          </div>
        </div>

        <div className="ai-wedding-venue-card">
          <span className="ai-wedding-venue-icon">
            <Icon name="icon-map" size={26} />
          </span>
          <div className="ai-wedding-venue-text">
            <div className="ai-wedding-venue-name">{venue}</div>
            <div className="ai-wedding-venue-addr">{address}</div>
          </div>
        </div>

        <div className="ai-wedding-message">{message}</div>

        {showLotteryNumber ? (
          <div className="ai-wedding-signature-lottery">
            <span>抽奖码</span>
            <span className="ai-wedding-signature-lottery-no">
              <span className="ai-wedding-lottery-hash">NO.</span>
              {lotteryNumber}
            </span>
          </div>
        ) : null}

        {showLotteryNumber ? (
          <div className="ai-wedding-lottery">
            <span className="ai-wedding-tear-hint">
              <ScissorsIcon />
              <span>沿虚线剪开</span>
              <ScissorsIcon />
            </span>
            <div className="ai-wedding-lottery-title">婚礼抽奖券</div>
            <div className="ai-wedding-lottery-label">
              <Star size={12} color="#f7cd67" />
              <span>{lotteryLabel}</span>
              <Star size={12} color="#f7cd67" />
            </div>
            <div className="ai-wedding-lottery-number">
              <span className="ai-wedding-lottery-hash">NO.</span>
              {lotteryNumber}
            </div>
            {lotteryHint ? <div className="ai-wedding-lottery-hint">{lotteryHint}</div> : null}
          </div>
        ) : null}
      </div>
    );
  },
);

WeddingInvitation.displayName = 'WeddingInvitation';

export function WeddingInvitationExportButton({
  targetRef,
  filename = 'wedding-invitation',
  children = '保存为图片',
  className,
  style,
}: WeddingInvitationExportButtonProps) {
  const [exporting, setExporting] = useState(false);

  const handleClick = async () => {
    if (exporting) return;
    setExporting(true);
    try {
      await targetRef.current?.exportAsImage(filename);
    } catch (err) {
      console.error('[WeddingInvitation] 导出图片失败：', err);
      alert(`导出失败：${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setExporting(false);
    }
  };

  return (
    <button
      type="button"
      className={cn('ai-wedding-export-btn', className)}
      style={style}
      onClick={handleClick}
      disabled={exporting}
    >
      <DownloadIcon />
      {exporting ? '生成中…' : children}
    </button>
  );
}

WeddingInvitationExportButton.displayName = 'WeddingInvitationExportButton';
