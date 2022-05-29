import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Section from '../../components/Section';

const Board = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 0,
  display: 'flex',
  order: 2,
  justifyContent: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(1),
}));

const TodosApp = () => {
  return (
    <Board className="board">
      {[0, 1, 2].map(d => <Section />)}
    </Board>
  );
}

export default TodosApp;
