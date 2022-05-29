import React from 'react'
import { Card } from '@mui/material';
import { Todo } from '../types';

export default function TodoCard({ id, status, content }: Todo) {
  return (
    <Card>
      {content}
    </Card>
  )
}