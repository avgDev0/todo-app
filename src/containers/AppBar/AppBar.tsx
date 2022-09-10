import React from 'react'
import { Box, Toolbar, AppBar as MUIAppBar, Typography, Button } from '@mui/material'

export default function AppBar() {
  return (
    <Box className="appBar-container" sx={{ height: '75px' }}>
      <MUIAppBar sx={{ height: 'inherit' }}>
        <Toolbar sx={{ justifyContent: 'space-between', mt: 1, mb: 1 }}>
          <Typography variant='h4'>Todo App</Typography>
          <Button onClick={console.log} variant='contained' sx={{ fontWeight: 'bold' }}>
            Add TODO
          </Button>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}
