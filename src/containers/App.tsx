import React, { useState } from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles'
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const AppContainer = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  padding: theme.spacing(2),
}));

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleDelete = (removeIndex: number) =>
    setTodos(todos.filter((_, index) => index !== removeIndex));

  return (
    <AppContainer className="app">
      <TodoInput onAddClick={newTodo => setTodos([...todos, newTodo])} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </AppContainer>
  );
}

export default App;
