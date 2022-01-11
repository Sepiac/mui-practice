import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { SepiacIcon } from '../icons'

export const MainMenu = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <SepiacIcon style={{display: 'inline-block', verticalAlign: 'middle', width: '2rem', marginRight: '1rem'}}/>
            MUI Practice App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
