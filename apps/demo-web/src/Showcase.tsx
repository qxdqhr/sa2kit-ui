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
  ICON_LIST,
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
  WeddingInvitationExportButton,
} from '@sa2kit-ui/react';
import type { WeddingInvitationRef } from '@sa2kit-ui/react';
import { SA2_THEMES, useTheme } from '@sa2kit-ui/theme-runtime';
import { useRef, useState } from 'react';

const tableData = [
  { id: '1', name: '鲈鱼', price: 400 },
  { id: '2', name: '鲷鱼', price: 3000 },
  { id: '3', name: '金鱼', price: 1300 },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {SA2_THEMES.map((item) => (
        <Button
          key={item.id}
          type={theme === item.id ? 'primary' : 'default'}
          size="small"
          onClick={() => setTheme(item.id)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}

export default function Showcase() {
  const [on, setOn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [checks, setChecks] = useState<Array<string | number>>(['a']);
  const [radio, setRadio] = useState<string | number>('1');
  const [selectValue, setSelectValue] = useState('apple');
  const [loading, setLoading] = useState(false);
  const weddingRef = useRef<WeddingInvitationRef>(null);

  return (
    <Cursor>
      <main className="sa2-font min-h-screen bg-sa2-bg p-8 md:p-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Title size="large" color="app-teal">
                全组件 Showcase
              </Title>
              <p className="mt-4 text-sa2-text-secondary">
                SA2Kit UI · Web · 24 组件一览
              </p>
              <div className="mt-4">
                <ThemeSwitcher />
              </div>
            </div>
            <Time />
          </header>

          <Card>
            <Title className="mb-4">Icons</Title>
            <div className="flex flex-wrap gap-3">
              {ICON_LIST.map(({ name }) => (
                <Icon key={name} name={name} size={32} bounce />
              ))}
            </div>
          </Card>

          <Card>
            <Title className="mb-4">Button · Tooltip · Typewriter</Title>
            <div className="flex flex-wrap gap-3">
              <Button type="primary">Primary</Button>
              <Button type="default">Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="primary" onClick={() => setModalOpen(true)}>
                打开 Modal
              </Button>
              <Tooltip title="欢迎来到无人岛！" placement="top">
                <Button type="default">Tooltip</Button>
              </Tooltip>
            </div>
            <p className="mt-4 text-sa2-text">
              <Typewriter speed={60}>今天也要在岛上度过美好的一天～</Typewriter>
            </p>
          </Card>

          <Tabs
            items={[
              { key: '1', label: '岛屿', children: <p>欢迎来到无人岛！</p> },
              { key: '2', label: '商店', children: <p>Nook 购物中…</p> },
              { key: '3', label: '博物馆', children: <p>捐赠化石与鱼类</p> },
            ]}
          />

          <Collapse
            question="什么是 sa2kit-ui？"
            answer="一套受《集合啦！动物森友会》启发的 sa2kit 多平台 UI 组件库，样式从 animal-island-ui 移植。"
          />

          <Divider type="wave-yellow" />

          <Card type="dashed">
            <Title className="mb-4" color="app-yellow">
              表单控件
            </Title>
            <div className="flex flex-col gap-4">
              <Input placeholder="输入框" allowClear shadow />
              <Switch checked={on} onChange={setOn} />
              <Select
                value={selectValue}
                onChange={setSelectValue}
                options={[
                  { key: 'apple', label: '苹果' },
                  { key: 'orange', label: '橘子' },
                  { key: 'peach', label: '桃子' },
                ]}
              />
              <Checkbox
                options={[
                  { label: '苹果', value: 'a' },
                  { label: '橘子', value: 'b' },
                  { label: '樱桃', value: 'c' },
                ]}
                value={checks}
                onChange={setChecks}
              />
              <Radio
                options={[
                  { label: '春', value: '1' },
                  { label: '夏', value: '2' },
                  { label: '秋', value: '3' },
                ]}
                value={radio}
                onChange={setRadio}
              />
              <Button type="primary" onClick={() => setLoading((v) => !v)}>
                {loading ? '关闭 Loading' : '预览 Loading'}
              </Button>
            </div>
          </Card>

          <Card>
            <Title className="mb-4">Table</Title>
            <Table
              rowKey="id"
              columns={[
                { title: '名称', dataIndex: 'name' },
                { title: '价格', dataIndex: 'price', align: 'right' },
              ]}
              dataSource={tableData}
            />
          </Card>

          <CodeBlock
            code={`import { Button } from '@sa2kit-ui/react';\n\n<Button type="primary">Go</Button>`}
          />

          <Divider type="dashed-teal" />

          <Card>
            <Title className="mb-4">Wallet</Title>
            <div className="flex flex-wrap items-end gap-6">
              <Wallet value={12500} />
              <Wallet value={999999} size="large" />
              <Wallet value="FREE" size="small" />
            </div>
          </Card>

          <Card>
            <Title className="mb-4">婚礼请柬</Title>
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center">
              <WeddingInvitation ref={weddingRef} groomName="小狸" brideName="小兔" />
              <WeddingInvitationExportButton targetRef={weddingRef} />
            </div>
          </Card>

          <Card>
            <Title className="mb-4">NookPhone</Title>
            <div className="overflow-x-auto">
              <Phone />
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <Card color="app-pink">app-pink</Card>
            <Card color="app-blue">app-blue</Card>
            <Card color="app-yellow">app-yellow</Card>
          </div>

          <Footer type="tree" />
          <Footer type="sea" />
        </div>

        <Modal
          open={modalOpen}
          title="欢迎来到无人岛"
          onClose={() => setModalOpen(false)}
          onOk={() => setModalOpen(false)}
        >
          <p>今天也要在岛上度过美好的一天！</p>
        </Modal>

        {loading ? <Loading /> : null}
      </main>
    </Cursor>
  );
}
