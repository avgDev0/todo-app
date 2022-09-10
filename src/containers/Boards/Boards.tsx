import React from 'react'
import { Container } from '@mui/material'
import Board from '../../components/Board'

export default function Boards() {
  return (
    <Container
      sx={{ pt: 1, display: 'flex', overflowX: 'scroll' }}
    >
      {['title', 'title2'].map(d => <Board title={d} />)}
    </Container >
  )
}
