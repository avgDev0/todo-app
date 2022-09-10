import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../containers/Todos/store/reducer';
import boardsReducer from '../containers/Boards/store/reducer';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    boards: boardsReducer,
  },
});

export default store;
export type IState = ReturnType<typeof store.getState>;
