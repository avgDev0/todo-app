import React from 'react'
import { AppBar } from '@mui/material'
import Select from '../components/Select';

type Props = {}

function TopBar({ }: Props) {
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
      <Select />
    </AppBar>
  )
}

export default TopBar