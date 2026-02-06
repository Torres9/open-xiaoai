// XiaoAi Channel Definition
import type {
  DingTalkConfig,
  TokenInfo,
  DingTalkInboundMessage,
  MessageContent,
  SendMessageOptions,
  MediaFile,
  HandleDingTalkMessageParams,
  ProactiveMessagePayload,
  SessionWebhookResponse,
  AxiosResponse,
  Logger,
  GatewayStartContext,
  GatewayStopResult,
  AICardInstance,
  AICardStreamingRequest
} from './types';

export const xiaoAiPlugin = {
  id: 'xiaoai',
  meta: {
    id: 'xiaoai',
    label: 'XiaoAi',
    selectionLabel: 'XiaoAI',
    docsPath: '/channels/dingtalk',
    blurb: '',
    aliases: ['xa'],
  },
  gateway: {
    startAccount: async (ctx: GatewayStartContext): Promise<GatewayStopResult> => {	
    }
  }
}