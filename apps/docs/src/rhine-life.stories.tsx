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
  title: 'Overview / 莱茵生命主题',
  meta: {
    description: '莱茵生命 v1 — 24 个 Web 组件全量主题预览',
  },
};

const tableColumns = [
  { title: '样本名', dataIndex: 'name' as const },
  { title: '类型', dataIndex: 'type' as const },
];
const tableData = [
  { key: '1', name: 'RL-0421', type: '源石' },
  { key: '2', name: 'RL-0880', type: '生态' },
];

export const RhineShowcase = () => {
  const { theme, setTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState<Array<string | number>>(['exp']);

  if (theme !== 'rhine-life') {
    return (
      <div className="max-w-2xl p-6">
        <p className="mb-4 text-sa2-text-secondary">
          当前主题为「{theme}」。点击下方按钮切换到莱茵生命主题查看 24 组件效果。
        </p>
        <Button type="primary" onClick={() => setTheme('rhine-life')}>
          切换到莱茵生命
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl space-y-10 p-4">
      <header>
        <Title size="large" color="app-teal" className="rl-font-display">
          莱茵生命
        </Title>
        <p className="mt-2 text-sa2-text-secondary">Rhine Life · 24 组件全量适配</p>
        <hr className="rl-divider-stripe mt-4" />
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
            <Modal open={modalOpen} title="莱茵生命档案" onClose={() => setModalOpen(false)}>
              <Typewriter speed={30}>欢迎来到莱茵生命。此处记录一切异变与访客行踪。</Typewriter>
            </Modal>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Tabs</p>
            <Tabs
              items={[
                { key: 'exp', label: '实验', children: '生态样本' },
                { key: 'data', label: '数据', children: '源石读数' },
                { key: 'warn', label: '警示', children: '安全协议' },
              ]}
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Collapse</p>
            <Collapse
              question="何为莱茵生命？"
              answer="莱茵生命是记录异变与平数据的档案之所。"
              defaultExpanded
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Checkbox</p>
              <Checkbox
                options={[{ label: '实验', value: 'exp' }]}
                value={checked}
                onChange={setChecked}
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Radio</p>
              <Radio options={[{ label: '数据', value: 'data' }]} defaultValue="data" />
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
            <Tooltip title="实验室提示气泡">
              <Button>悬停查看</Button>
            </Tooltip>
          </div>

          <div className="max-w-xs">
            <p className="mb-2 text-sm font-bold text-sa2-text-secondary">Select</p>
            <Select
              options={[
                { label: '实验', value: 'exp' },
                { label: '数据', value: 'data' },
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
          <CodeBlock code={"const theme = 'rhine-life';\nconsole.log(theme);"} />
          <Table columns={tableColumns} dataSource={tableData} />
          <Icon name="map" size={48} bounce />
          <Footer type="tree" />
          <div className="overflow-x-auto">
            <Phone />
          </div>
          <Cursor forceAll={false}>
            <div className="rl-surface p-4 text-sm">Scoped Cursor 区域</div>
          </Cursor>
          <Wallet value={1280} />
          <WeddingInvitation
            brideName="晓"
            groomName="青"
            date="2026 · 春"
            venue="莱茵生命·实验厅"
            message="诚邀莅临莱茵生命观礼。"
            showLotteryNumber={false}
          />
        </div>
      </section>

      <section>
        <p className="mb-2 text-sm font-bold text-sa2-text-secondary">莱茵生命标签</p>
        <div className="flex flex-wrap gap-2">
          <span className="rl-tag rl-tag--exp">实验</span>
          <span className="rl-tag rl-tag--data">数据</span>
          <span className="rl-tag rl-tag--warn">警示</span>
          <span className="rl-tag rl-tag--muted">档案</span>
        </div>
      </section>
    </div>
  );
};

RhineShowcase.storyName = '全组件预览';
