import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';

const AppContainer = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  padding: theme.spacing(2),
}));

const TodosApp = () => {
  return (
    <AppContainer className="app">
      <TodoInput />
      <TodoList />
    </AppContainer>
  );
}

export default TodosApp;
