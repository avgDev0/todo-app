import React from 'react'
import { Box, Toolbar, AppBar as MUIAppBar, Typography } from '@mui/material'
import TodoInput from '../../components/TodoInput'

export default function AppBar() {
  return (
    <Box sx={{ flex: '0 0 auto' }}>
      <MUIAppBar>
        <Toolbar sx={{ justifyContent: 'space-between', mt: 1, mb: 1 }}>
          <Typography variant='h4'>Todo App</Typography>
          <TodoInput />
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}
