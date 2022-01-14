import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom'
import { SepiacIcon } from '../icons'
import FaceIcon from '@mui/icons-material/Face';
import HailIcon from '@mui/icons-material/Hail';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

function getPageIcon(pathName: string) {
  const style = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '2rem',
    marginRight: '1rem'
  }
  return (
    pathName === '/shydemo' ? <FaceIcon style={style} /> : pathName === '/outgoingdemo' ? <HailIcon style={style} /> : pathName === '/treeguydemo' ? <NaturePeopleIcon /> : <SepiacIcon style={style} />
  )
}

export const MainMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const location = useLocation()
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {getPageIcon(location?.pathname)}
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
          <ListItem component={Link} to="/" >
            <ListItemIcon><SepiacIcon style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              width: '1.5rem',
              marginRight: '.1rem'
            }} />Hi new friends!</ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem component={Link} to="/shydemo">
            <ListItemIcon><FaceIcon />Um... Hi</ListItemIcon>
          </ListItem>
          <ListItem component={Link} to="/outgoingdemo">
            <ListItemIcon>
              <HailIcon />
              Good to see you guys!
            </ListItemIcon>
          </ListItem>
          <ListItem component={Link} to="/treeguydemo">
            <ListItemIcon>
              <NaturePeopleIcon />
              What a beautiful tree!
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
