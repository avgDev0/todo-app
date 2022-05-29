import React from 'react'
import { styled } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline';

const Container = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '5rem',
  textAlign: 'center',
  opacity: 0.3,
  cursor: 'pointer',
});

export default function NoBoard() {
  return (
    <Container onClick={() => console.log('no board click')}>
      There are no boards created, click here to create you first board!
      <AddIcon sx={{ width: 200, height: 200 }} color='info' />
    </Container>
  )
}
