import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Section from '../components/Section';
import NoBoard from '../components/NoBoard';
import { getBoards, getSelectedBoard } from '../store/selectors'

const Board = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 0,
  display: 'flex',
  order: 2,
  justifyContent: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const Boards = () => {
  const currentBoard = useSelector(getSelectedBoard);

  return currentBoard ?
    (
      <Board className="board">
        {currentBoard.sections.map(section => <Section key={`${currentBoard.id}.${section}`} name={section} />)}
      </Board>
    ) : (
      <NoBoard />
    )
}

export default Boards;
