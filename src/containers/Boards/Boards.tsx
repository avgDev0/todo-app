import React from 'react'
import { Container } from '@mui/material'
import Board from '../../components/Board'
import { useSelector } from 'react-redux'
import { getBoards } from './store/selectors';

export default function Boards() {
  const boards = useSelector(getBoards);
  return (
    <Container
      sx={{ pt: 1, display: 'flex', overflowX: 'scroll' }}
    >
      {boards.map(({ title, id }) => <Board key={id} title={title} />)}
    </Container >
  )
}
