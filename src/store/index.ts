import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from '../containers/Todos/store/reducer';

const store = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});

export default store;
export type IState = ReturnType<typeof store.getState>;
