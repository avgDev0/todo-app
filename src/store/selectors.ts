import { createSelector } from 'reselect';
import type { IState } from './index';

const todosState = (state: IState) => state.todos;

export const getTodos = createSelector(todosState, (state) => state.todos);

export const getBoards = createSelector(todosState, (state) => state.boards);

export const getSelectedBoard = createSelector(todosState, (state) => state.selectedBoard);
