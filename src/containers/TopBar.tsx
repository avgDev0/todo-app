import React from 'react'
import { AppBar, SelectChangeEvent } from '@mui/material'
import Select from '../components/Select';
import { useSelector } from 'react-redux';
import { getBoards, getSelectedBoard } from '../store/selectors';

function TopBar() {
  const boards = useSelector(getBoards);
  const selectedBoard = useSelector(getSelectedBoard);

  const handleChange = (id: string) => {
    console.log(id);
  }

  return (
    <AppBar
      className='topBar'
      position='static'
      color='transparent'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      elevation={0}
    >
      <Select options={boards.map(b => ({ key: b.name, value: b.id }))} selected={selectedBoard?.id} onChange={handleChange} />
    </AppBar>
  )
}

export default TopBar