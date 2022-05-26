import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './reducer';

const store = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});

export default store;
export type IState = ReturnType<typeof store.getState>;
