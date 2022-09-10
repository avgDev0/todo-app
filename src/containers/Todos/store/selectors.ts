import { createSelector } from 'reselect';
import type { IState } from '../../../store';

const todosState = (state: IState) => state.todos;

export const getTodos = createSelector(todosState, (state) => state.todos);
