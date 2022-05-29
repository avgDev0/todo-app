import { TodoStatus } from './enums';

export type Todo = {
  id: string;
  status: TodoStatus;
  boardId: string;
  content: string;
};

export type Board = {
  id: string;
  name: string;
  sections: string[];
};
