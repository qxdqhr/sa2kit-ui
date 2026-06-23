import {
  Button,
  Card,
  Checkbox,
  CodeBlock,
  Collapse,
  Cursor,
  Divider,
  Footer,
  Icon,
  Input,
  Loading,
  Modal,
  Phone,
  Radio,
  Select,
  Switch,
  Table,
  Tabs,
  Time,
  Title,
  Tooltip,
  Typewriter,
  Wallet,
  WeddingInvitation,
} from '@sa2kit-ui/react';
import { useTheme } from '@sa2kit-ui/theme-runtime';
import { useState } from 'react';

export default {
  title: 'Overview / 界园主题',
  meta: {
    description: '界园志异 v3 — 24 个 Web 组件全量主题预览',
  },
};

const tableColumns = [
  { title: '异变名', dataIndex: 'name' as const },
  { title: '类别', dataIndex: 'type' as const },
];
const tableData = [
  { key: '1', name: '花影', type: '花' },
  { key: '2', name: '衡石', type: '衡' },
];

export const JieyuanShowcase = () => {
  const { theme, setTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState<Array<string | number>>(['hua']);

  if (theme !== 'jieyuan-garden') {
    return (
      <div className="max-w-2xl p-6">
        <p className="mb-4 text-sa2-text-secondary">
          当前主题为「{theme}」。点击下方按钮切换到界园主题查看 24 组件效果。
        </p>
        <Button type="primary" onClick={() => setTheme('jieyuan-garden')}>
          切换到界园
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl space-y-10 p-4">
      <header>
        <Title size="large" color="app-teal" className="jy-font-display">
          界园志异
        </Title>
        <p className="mt-2 text-sa2-text-secondary">Jieyuan Garden · 24 组件全量适配</p>
        <hr className="jy-divider-stripe mt-4" />
      </header>

      <section>
        <Title size="middle" className="mb-4">
          Tier 1 · 基础交互
        </Title>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Button</p>
            <div className="flex flex-wrap gap-2">
              <Button type="primary">主按钮</Button>
              <Button>默认</Button>
              <Button type="dashed">虚线</Button>
              <Button type="link">链接</Button>
              <Button type="primary" danger>
                危险
              </Button>
              <Button type="primary" loading>
                加载
              </Button>
            </div>
          </div>

          <div className="grid max-w-lg gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Input</p>
              <Input placeholder="访客名…" />
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Switch</p>
              <Switch defaultChecked />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Card</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <Card>默认</Card>
              <Card color="app-pink">
                粉
              </Card>
              <Card color="app-teal">
                青
              </Card>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Modal + Typewriter</p>
            <Button type="primary" onClick={() => setModalOpen(true)}>
              打开模态框
            </Button>
            <Modal open={modalOpen} title="界园档案" onClose={() => setModalOpen(false)}>
              <Typewriter speed={30}>欢迎来到界园。此处记录一切异变与访客行踪。</Typewriter>
            </Modal>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Tabs</p>
            <Tabs
              items={[
                { key: 'hua', label: '花', children: '花类异变' },
                { key: 'heng', label: '衡', children: '衡类记录' },
                { key: 'li', label: '厉', children: '厉类事件' },
              ]}
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Collapse</p>
            <Collapse
              question="何为界园？"
              answer="界园是记录异变与平衡的档案之所。"
              defaultExpanded
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Checkbox</p>
              <Checkbox
                options={[{ label: '花', value: 'hua' }]}
                value={checked}
                onChange={setChecked}
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Radio</p>
              <Radio options={[{ label: '衡', value: 'heng' }]} defaultValue="heng" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Title size="middle" className="mb-4">
          Tier 2 · 反馈与布局
        </Title>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Tooltip</p>
            <Tooltip title="粉青提示气泡">
              <Button>悬停查看</Button>
            </Tooltip>
          </div>

          <div className="max-w-xs">
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Select</p>
            <Select
              options={[
                { label: '花', value: 'hua' },
                { label: '衡', value: 'heng' },
              ]}
              placeholder="选择类别"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Loading</p>
            <div className="relative min-h-[120px] overflow-hidden rounded-sa2-lg border-2 border-sa2-border">
              <Loading active />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Divider</p>
            <Divider />
            <Divider type="dashed-teal" />
          </div>
        </div>
      </section>

      <section>
        <Title size="middle" className="mb-4">
          Tier 3 · 展示与内容
        </Title>
        <div className="space-y-6">
          <Time />
          <CodeBlock code={"const theme = 'jieyuan-garden';\nconsole.log(theme);"} />
          <Table columns={tableColumns} dataSource={tableData} />
          <Icon name="map" size={48} bounce />
          <Footer type="tree" />
          <div className="overflow-x-auto">
            <Phone />
          </div>
          <Cursor forceAll={false}>
            <div className="jy-surface p-4 text-sm">Scoped Cursor 区域</div>
          </Cursor>
          <Wallet value={1280} />
          <WeddingInvitation
            brideName="晓"
            groomName="青"
            date="2026 · 春"
            venue="界园·花厅"
            message="诚邀莅临界园观礼。"
            showLotteryNumber={false}
          />
        </div>
      </section>

      <section>
        <p className="mb-2 text-sm font-bold text-sa2-text-secondary">界园标签</p>
        <div className="flex flex-wrap gap-2">
          <span className="jy-tag jy-tag--hua">花</span>
          <span className="jy-tag jy-tag--heng">衡</span>
          <span className="jy-tag jy-tag--li">厉</span>
          <span className="jy-tag jy-tag--muted">档案</span>
        </div>
      </section>
    </div>
  );
};

JieyuanShowcase.storyName = '全组件预览';
