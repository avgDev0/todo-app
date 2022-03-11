import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  todos: string[];
};

const initialState: InitialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
  },
});

export const { actions } = todosSlice;

export default todosSlice.reducer;
