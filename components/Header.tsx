import { AppBar, Button, Container, Drawer, IconButton, Link, ListItem, ListItemButton, ListItemIcon, Toolbar } from '@mui/material'
import type { NextPage } from 'next'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../c.png'
import Image from 'next/image'
import { Box } from '@mui/system'
import { useState } from 'react';

const Header: NextPage = () => {
  function toggleDrawer(){
    setOpen(!open);
  }
  let [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        <Toolbar/>
        <Box sx={{textAlign:'center', width:"250px"}}>
          <ListItem button href='/' color="secondary" sx={{color:'#57606f', display:'flex', justifyContent:"center",fontFamily:'"Roboto","Helvetica","Arial",sans-serif'}} key={0}>Home</ListItem>
          <ListItem button href='#about' color="secondary" sx={{color:'#57606f', display:'flex', justifyContent:"center",fontFamily:'"Roboto","Helvetica","Arial",sans-serif'}} key={1}>About</ListItem>
          <ListItem button href='#courses' color="secondary" sx={{color:'#57606f', display:'flex', justifyContent:"center",fontFamily:'"Roboto","Helvetica","Arial",sans-serif'}} key={2}>Courses</ListItem>
          <ListItem button href='#pricing' color="secondary" sx={{color:'#57606f', display:'flex', justifyContent:"center",fontFamily:'"Roboto","Helvetica","Arial",sans-serif', mb:1}} key={3}>Pricing</ListItem>
          <Button href='#newsletter' variant="contained" sx={{ml:1,borderRadius:'30px'}} color='primary' key={4}>JOIN US</Button>
        </Box>
      </Drawer>
      <AppBar sx={{backgroundColor:'transparent', boxShadow:'none', position:'absolute', top:'0'}}>
        <Container>
            <Toolbar sx={{justifyContent:"space-between"}}>
                <div style={{display:'flex', alignItems:'center'}}>
                  <Image height={25} width={25} src={logo} />
                  <span style={{color:"#2f3640", marginLeft:'5px', fontSize:'large'}}>CCourses</span>
                </div>
                <Box sx={{display:{xs:"none", md:'block'}}}>
                    <Button href='/' size='small' color="secondary" sx={{color:'#57606f'}} key={0}>Home</Button>
                    <Button href='#about' size='small' color="secondary" sx={{color:'#57606f'}} key={1}>About</Button>
                    <Button href='#courses' size='small' color="secondary" sx={{color:'#57606f'}} key={2}>Courses</Button>
                    <Button href='#pricing' size='small' color="secondary" sx={{color:'#57606f'}} key={3}>Pricing</Button>
                    <Button href='#newsletter' size='small' variant="contained" sx={{ml:1,borderRadius:'30px'}} color='primary' key={4}>JOIN US</Button>
                </Box>
                <IconButton onClick={toggleDrawer} edge='start' sx={{mr: 2, display:{md: 'none'}}}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
