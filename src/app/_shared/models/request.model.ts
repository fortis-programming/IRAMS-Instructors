export interface RequestModel {
  requestId: string;
  sender: string;
  message: string;
  date: Date;
  returned: boolean;
}