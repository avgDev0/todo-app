import React from 'react'
import { styled } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline';
import NewBoardDialog from './NewBoardDialog';

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
  const [showDialog, setShowDialog] = React.useState<boolean>(false);

  const toggleOpen = () => {
    setShowDialog(v => !v);
  }

  return (
    <>
      <Container onClick={toggleOpen}>
        There are no boards created, click here to create you first board!
        <AddIcon sx={{ width: 200, height: 200 }} color='info' />
      </Container>
      <NewBoardDialog open={showDialog} onClose={toggleOpen} />
    </>
  )
}
