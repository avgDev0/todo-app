import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Section from '../components/Section';
import NoBoard from '../components/NoBoard';

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

const TodosApp = () => {
  const boards: string[] = [];
  return boards.length > 0 ?
    (
      <Board className="board">
        {boards.map(d => <Section />)}
      </Board>
    ) : (
      <NoBoard />
    )
}

export default TodosApp;
