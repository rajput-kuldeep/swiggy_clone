export interface Onboarding {
  statusCode: number;
  data: data;
  tid: string;
  sid: string;
  deviceId: string;
  csrfToken: string;
}
export interface data {
  issues: issues;
  conversations?: null;
}
export interface issues {
  meta: Meta;
  data?: (DataEntity)[] | null;
}
export interface Meta {
  total: number;
  type: string;
}
export interface DataEntity {
  id: number;
  title: string;
  description?: string | null;
  conversationId?: null;
  layerConversationId?: null;
  ackText?: null;
  isLeaf: boolean;
  isBackupNode: boolean;
  isResolutionNode: boolean;
  options?: (OptionsEntity | null)[] | null;
  hyperLinkText?: string | null;
  hyperLink?: string | null;
}
export interface OptionsEntity {
  type: string;
  phoneNumber?: null;
  provider?: null;
  waitTime: string;
  emailId: string;
}

  