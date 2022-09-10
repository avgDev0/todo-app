import { createSelector } from 'reselect';
import type { IState } from '../../../store';

const boardsState = (state: IState) => state.boards;

export const getBoards = createSelector(boardsState, (state) => state.boards);
