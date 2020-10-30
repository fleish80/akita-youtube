export interface Todo {
  _id: string;
  title: string;
  description: string;
  status: TodoStatus;
}
export enum TodoStatus {
  Open = 'open',
  Done = 'done'
}
