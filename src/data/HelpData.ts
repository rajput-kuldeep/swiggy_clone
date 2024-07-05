export interface FaqData {
    issueTypes: IssueTypes;
  }
  export interface IssueTypes {
    meta: Meta;
    data?: (DataEntity)[] | null;
  }
  export interface Meta {
    total: number;
  }
  export interface DataEntity {
    type: string;
    title: string;
    description: string;
  }
  