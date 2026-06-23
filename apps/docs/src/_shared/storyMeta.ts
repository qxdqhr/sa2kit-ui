import { COMPONENT_DOCS } from './componentMeta';

/** 供文档参考；Ladle 要求 export default 为静态字面量，story 文件内直接写对象 */
export function getStoryMeta(name: string, description: string) {
  const doc = COMPONENT_DOCS.find((c) => c.name === name);
  return {
    title: `Components / ${name}`,
    meta: {
      description,
      tier: doc?.tier,
    },
  };
}
