import React from 'react'
import { List, ListItem, IconButton, ListItemText } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

type TodoListProps = {
  todos: string[];
  onDelete: (todoIndex: number) => void;
};

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

export default function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <Container>
      <List dense>
        {todos.map((todo, index) => (
          <ListItem
            secondaryAction={
              <IconButton edge='end' onClick={() => onDelete(index)}>
                <DeleteIcon color='error' />
              </IconButton>
            }
          >
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
