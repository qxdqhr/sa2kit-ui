import type {
  WeddingInvitationExportButtonProps,
  WeddingInvitationProps,
  WeddingInvitationRef,
} from '@sa2kit-ui/shared';
import { cn } from '@sa2kit-ui/shared';
import { domToCanvas } from 'modern-screenshot';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Icon } from '../Icon';
import brideAndGroomImg from './img/brideandgroom.PNG';
import weddingTitleImg from './img/wedding.PNG';
import { injectWeddingFonts, prepareWeddingFontsForExport } from './weddingFonts';

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
      <path
        d="M22 42 C 28 38, 32 34, 36 30"
        stroke="#3d5a1a"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M30 48 C 34 44, 38 40, 42 36"
        stroke="#3d5a1a"
        strokeWidth="1.4"
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
      <ellipse cx="22" cy="22" rx="3.5" ry="5" fill="#fff" opacity="0.7" transform="rotate(-25 22 22)" />
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
      subtitle = <img src={weddingTitleImg} alt="集合啦 婚礼森友会" />,
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
        className={cn('sa2-wedding-envelope', !showLotteryNumber && 'sa2-wedding-no-lottery', className)}
        style={style}
      >
        <Leaf className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-tl')} />
        <Leaf className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-tr')} />
        <Leaf className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-bl')} />
        <Leaf className={cn('sa2-wedding-corner-leaf', 'sa2-wedding-br')} />

        <span className={cn('sa2-wedding-float-item', 'sa2-wedding-f1')}>
          <Flower color="#f8a6b2" />
        </span>
        <span className={cn('sa2-wedding-float-item', 'sa2-wedding-f2')}>
          <Flower color="#ecdf52" center="#e59266" size={22} />
        </span>
        <span className={cn('sa2-wedding-float-item', 'sa2-wedding-f3')}>
          <Flower color="#b77dee" size={20} />
        </span>
        <span className={cn('sa2-wedding-float-item', 'sa2-wedding-s1')}>
          <Star color="#f7cd67" />
        </span>
        <span className={cn('sa2-wedding-float-item', 'sa2-wedding-s2')}>
          <Star color="#82d5bb" size={14} />
        </span>

        <div className="sa2-wedding-banner">
          <span className="sa2-wedding-banner-line" />
          <Star size={16} color="#f7cd67" />
          <span className="sa2-wedding-banner-line" />
        </div>

        <div className="sa2-wedding-title-en">{title}</div>
        <div className="sa2-wedding-title-zh">{subtitle}</div>

        <div className="sa2-wedding-couple-img">
          <img src={brideAndGroomImg} alt="bride and groom" />
        </div>

        <div className="sa2-wedding-couple-row">
          <div className="sa2-wedding-mascot">
            <div className="sa2-wedding-name">{brideName}</div>
          </div>
          <div className="sa2-wedding-heart-col">
            <Heart size={30} />
          </div>
          <div className="sa2-wedding-mascot">
            <div className="sa2-wedding-name">{groomName}</div>
          </div>
        </div>

        <div className="sa2-wedding-date-card">
          <div className="sa2-wedding-date-label">婚礼时间</div>
          <div className="sa2-wedding-date-value">{date}</div>
          <div className="sa2-wedding-date-meta">
            <span>{weekday}</span>
            <span className="sa2-wedding-dot">·</span>
            <span>{time}</span>
          </div>
        </div>

        <div className="sa2-wedding-venue-card">
          <span className="sa2-wedding-venue-icon">
            <Icon name="icon-map" size={26} />
          </span>
          <div className="sa2-wedding-venue-text">
            <div className="sa2-wedding-venue-name">{venue}</div>
            <div className="sa2-wedding-venue-addr">{address}</div>
          </div>
        </div>

        <div className="sa2-wedding-message">{message}</div>

        {showLotteryNumber ? (
          <div className="sa2-wedding-signature-lottery">
            <span>抽奖码</span>
            <span className="sa2-wedding-signature-lottery-no">
              <span className="sa2-wedding-lottery-hash">NO.</span>
              {lotteryNumber}
            </span>
          </div>
        ) : null}

        {showLotteryNumber ? (
          <div className="sa2-wedding-lottery">
            <span className="sa2-wedding-tear-hint">
              <ScissorsIcon />
              <span>沿虚线剪开</span>
              <ScissorsIcon />
            </span>
            <div className="sa2-wedding-lottery-title">婚礼抽奖券</div>
            <div className="sa2-wedding-lottery-label">
              <Star size={12} color="#f7cd67" />
              <span>{lotteryLabel}</span>
              <Star size={12} color="#f7cd67" />
            </div>
            <div className="sa2-wedding-lottery-number">
              <span className="sa2-wedding-lottery-hash">NO.</span>
              {lotteryNumber}
            </div>
            {lotteryHint ? <div className="sa2-wedding-lottery-hint">{lotteryHint}</div> : null}
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
      className={cn('sa2-wedding-export-btn', className)}
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
