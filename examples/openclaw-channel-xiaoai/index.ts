import type { OpenClawPluginApi } from 'openclaw/plugin-sdk';
import { emptyPluginConfigSchema } from 'openclaw/plugin-sdk';
import { xiaoAiPlugin } from './src/channel';
import { setXiaoAiRuntime } from './src/runtime';

const plugin = {
  id: 'xiaoai',
  name: 'XiaoAi Channel',
  description: 'XiaoAi音箱 messaging channel via Stream mode',
  configSchema: emptyPluginConfigSchema(),
  register(api: OpenClawPluginApi): void {
    setXiaoAiRuntime(api.runtime);
    api.registerChannel({ plugin: xiaoAiPlugin });
  },
};

export default plugin;
