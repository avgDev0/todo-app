import React from 'react'
import { Button, Card as MUICard, CardActions, CardContent, CardProps, styled } from '@mui/material';
import { Todo } from '../types';

const Card = styled(
  (props: CardProps) => <MUICard {...props} />,
)(({ theme }) => ({
  minHeight: 100,
}));

export default function TodoCard({ id, status, content }: Todo) {
  return (
    <Card>
      <CardContent>
        {content}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small" variant='contained'>
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}