import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Section from '../../components/Section';

const Board = styled(Container)({
  width: '100%',
  height: '100%',
  padding: 0,
  display: 'flex',
  flexGrow: '1',
  alignItems: 'center',
});

const TodosApp = () => {
  return (
    <Board className="board">
      {[0, 1, 2].map(d => <Section />)}
    </Board>
  );
}

export default TodosApp;
