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
} from '@sa2kit-ui/rn';
import type { WeddingInvitationRef } from '@sa2kit-ui/shared';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

const tableData = [
  { id: '1', name: '鲈鱼', price: 400 },
  { id: '2', name: '鲷鱼', price: 3000 },
  { id: '3', name: '金鱼', price: 1300 },
];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="w-full">
      <Title className="mb-3" size="middle">
        {title}
      </Title>
      {children}
    </Card>
  );
}

export default function Showcase() {
  const [on, setOn] = useState(true);
  const [text, setText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [checks, setChecks] = useState<Array<string | number>>(['a']);
  const [radio, setRadio] = useState<string | number>('1');
  const [selectValue, setSelectValue] = useState('apple');
  const [loading, setLoading] = useState(false);
  const weddingRef = useRef<WeddingInvitationRef>(null);

  return (
    <Cursor>
      <ScrollView className="sa2-font flex-1 bg-sa2-bg">
        <View className="gap-6 px-4 py-8">
          <View className="mb-2 flex-row flex-wrap items-start justify-between gap-3">
            <View className="flex-1">
              <Title size="large" color="app-teal">
                全组件 Showcase
              </Title>
              <Text className="mt-2 text-sa2-text-secondary">SA2Kit UI · RN · 24 组件一览</Text>
            </View>
            <Time />
          </View>

          <Section title="Icons">
            <View className="flex-row flex-wrap gap-2">
              {ICON_LIST.map(({ name }) => (
                <Icon key={name} name={name} size={28} bounce />
              ))}
            </View>
          </Section>

          <Section title="Button · Tooltip · Typewriter">
            <View className="flex-row flex-wrap gap-2">
              <Button type="primary">Primary</Button>
              <Button type="default">Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="primary" onPress={() => setModalOpen(true)}>
                Modal
              </Button>
            </View>
            <View className="mt-3">
              <Tooltip title="欢迎来到无人岛！">
                <Button type="default">Tooltip</Button>
              </Tooltip>
            </View>
            <Text className="mt-3 text-sa2-text">
              <Typewriter speed={60}>今天也要在岛上度过美好的一天～</Typewriter>
            </Text>
          </Section>

          <Tabs
            items={[
              {
                key: '1',
                label: '岛屿',
                children: <Text className="p-2 text-sa2-text">欢迎来到无人岛！</Text>,
              },
              {
                key: '2',
                label: '商店',
                children: <Text className="p-2 text-sa2-text">Nook 购物中…</Text>,
              },
              {
                key: '3',
                label: '博物馆',
                children: <Text className="p-2 text-sa2-text">捐赠化石与鱼类</Text>,
              },
            ]}
          />

          <Collapse
            question="RN 端组件是否齐全？"
            answer="24 个组件已全部实现，API 与 Web 对齐。"
          />

          <Divider type="wave-yellow" />

          <Section title="表单控件">
            <View className="gap-3">
              <Input placeholder="输入框" allowClear value={text} onChange={setText} />
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
                ]}
                value={checks}
                onChange={setChecks}
              />
              <Radio
                options={[
                  { label: '春', value: '1' },
                  { label: '夏', value: '2' },
                ]}
                value={radio}
                onChange={setRadio}
              />
              <Button type="primary" onPress={() => setLoading((v) => !v)}>
                {loading ? '关闭 Loading' : '预览 Loading'}
              </Button>
            </View>
          </Section>

          <Section title="Table">
            <Table
              rowKey="id"
              columns={[
                { title: '名称', dataIndex: 'name' },
                { title: '价格', dataIndex: 'price', align: 'right' },
              ]}
              dataSource={tableData}
            />
          </Section>

          <CodeBlock code={`import { Button } from '@sa2kit-ui/rn';\n\n<Button type="primary">Go</Button>`} />

          <Divider type="dashed-teal" />

          <Section title="Wallet">
            <View className="flex-row flex-wrap items-end gap-4">
              <Wallet value={12500} />
              <Wallet value={999999} size="large" />
            </View>
          </Section>

          <Section title="婚礼请柬">
            <WeddingInvitation ref={weddingRef} groomName="小狸" brideName="小兔" />
            <View className="mt-3 items-center">
              <WeddingInvitationExportButton targetRef={weddingRef} />
            </View>
          </Section>

          <Section title="NookPhone">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Phone />
            </ScrollView>
          </Section>

          <View className="flex-row flex-wrap gap-2">
            <Card color="app-pink" className="min-w-[100px] flex-1">
              <Text className="text-center text-sa2-text">pink</Text>
            </Card>
            <Card color="app-blue" className="min-w-[100px] flex-1">
              <Text className="text-center text-sa2-text">blue</Text>
            </Card>
            <Card color="app-yellow" className="min-w-[100px] flex-1">
              <Text className="text-center text-sa2-text">yellow</Text>
            </Card>
          </View>

          <Footer type="tree" />
          <Footer type="sea" />
        </View>

        <Modal
          open={modalOpen}
          title="欢迎来到无人岛"
          onClose={() => setModalOpen(false)}
          onOk={() => setModalOpen(false)}
        >
          <Text className="text-sa2-text">今天也要在岛上度过美好的一天！</Text>
        </Modal>

        {loading ? <Loading /> : null}
      </ScrollView>
    </Cursor>
  );
}
