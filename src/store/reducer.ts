import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as UUID} from 'uuid';
import type { Todo, Board} from '../types'

type InitialState = {
  todos: Todo[];
  boards: Board[];
};

const initialState: InitialState = {
  todos: [],
  boards: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    addBoard: (state, action: PayloadAction<string>) => {
      const board = {
        name: action.payload,
        id: UUID(),
      };
      state.boards.push(board);
    },
  },
});

export const { actions } = todosSlice;

export default todosSlice.reducer;
