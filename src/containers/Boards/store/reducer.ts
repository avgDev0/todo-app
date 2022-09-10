import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types';

type InitialState = {
  boards: Board[];
};

const initialState: InitialState = {
  boards: [
    {
      id: 'todo',
      title: 'todo',
      todos: [],
    },
    {
      id: 'doing',
      title: 'doing',
      todos: [],
    },
    {
      id: 'done',
      title: 'done',
      todos: [],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    createBoard: (state, action: PayloadAction<string>) => {
      state.boards.push({
        id: action.payload.replaceAll(' ', '-'),
        title: action.payload,
        todos: [],
      });
    },
    addTodoToBoard: (
      state,
      action: PayloadAction<{ boardId: string; todoId: string }>,
    ) => {
      const { boardId, todoId } = action.payload;

      state.boards = state.boards.map((b) => {
        if (b.id === boardId) {
          return {
            ...b,
            todos: b.todos.concat(todoId),
          };
        }

        return b;
      });
    },
    removeTodoFromBoard: (
      state,
      action: PayloadAction<{ boardId: string; todoId: string }>,
    ) => {
      const { boardId, todoId } = action.payload;

      state.boards.map((b) => {
        if (b.id === boardId) {
          return {
            ...b,
            todos: b.todos.filter((t) => t !== todoId),
          };
        }
        return b;
      });
    },
  },
});

export const { actions } = boardsSlice;

export default boardsSlice.reducer;
