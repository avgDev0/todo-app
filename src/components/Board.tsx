import React from 'react'
import { Divider, styled, Typography } from '@mui/material';

type BoardProps = {
  title: string;
};

const Container = styled('div')(({ theme }) => ({
  boxShadow: 'inset 0px 0px 8px 7px rgb(38 37 37 / 32%)',
  flex: '0 0 300px',
  margin: theme.spacing(0, 1, 1, 1),
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  border: theme.spacing(2),
  borderColor: '#222020',
}));

export default function Board({ title }: BoardProps) {
  return (
    <Container>
      <div className='board-title'>
        <Typography variant='h4' sx={{ textTransform: 'capitalize' }}>
          {title}
        </Typography>
      </div>
      <Divider />
    </Container>
  )
}
