import React from 'react'
import { List, ListItem, IconButton, ListItemText } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/selectors';
import { actions } from '../store/reducer';

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

export default function TodoList() {
  const dispatch = useDispatch();
  const todos: string[] = useSelector(getTodos);

  return (
    <Container>
      <List dense>
        {todos.map((todo, index) => (
          <ListItem
            key={todo}
            secondaryAction={
              <IconButton edge='end' onClick={() => dispatch(actions.deleteTodo(index))}>
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
