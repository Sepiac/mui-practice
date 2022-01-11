import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { SepiacIcon } from '../icons'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FaceIcon from '@mui/icons-material/Face';
import HailIcon from '@mui/icons-material/Hail';

export const MainMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <SepiacIcon style={{ display: 'inline-block', verticalAlign: 'middle', width: '2rem', marginRight: '1rem' }} />
            MUI Practice App
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List>
          <ListItem button >
            <ListItemIcon><EmojiPeopleIcon /> Hi new friend!</ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem button >
            <ListItemIcon><FaceIcon />Hello</ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HailIcon />
              Good to see you two!
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
