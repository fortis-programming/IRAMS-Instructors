export interface DocumentModel {
  comments: Array<string>;
  date: Date;
  message: string;
  members: Array<string>;
  metaData: string;
  requestId: string;
  sender: string;
  status: string;
  type: string;
  validator: string;
  returned: boolean;
  title: string;
}