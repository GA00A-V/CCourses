import { AppBar, Button, Container, Drawer, IconButton, ListItem, Box, Toolbar, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  function toggleDrawer(){
    setOpen(!open);
  }
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  function isEmail(email:string){
    return regex.test(email);
  }
  function handleClose(){
    setSubscriptionOpen(!SubscriptOpen);
  }
  function handleEmail(){
    if (isEmail(email)){
      fetch('/api/subscribe', {headers:{'Content-Type':'application/json'},method:'POST', body:JSON.stringify({email})});
      handleClose();
      setEmail('');
    }
    else{
      setError(true);
    }
  }
  let [open, setOpen] = useState(false);
  let [SubscriptOpen, setSubscriptionOpen] = useState(false);
  let [email, setEmail] = useState('');
  let [error, setError] = useState(false);
  return (
    <div>
      <Dialog open={SubscriptOpen}
        keepMounted
        onClose={handleClose}>
      <DialogTitle sx={{fontWeight:"500", textAlign:'center'}}><SubscriptionsIcon/> Subscribe Us</DialogTitle>
      <DialogContent>
          <DialogContentText>
            Subscribe to get notified every-time we upload new course.
          </DialogContentText>
          <TextField
          sx={{marginTop:'1.6em'}}
            autoFocus
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            color='primary'
            error={error}
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            helperText={(error)?"email is not valid":''}
          />
      </DialogContent>
      <DialogActions sx={{marginBottom:'1em', marginRight:'1em'}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleEmail}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      <Drawer open={open} onClose={toggleDrawer}>
        <Toolbar/>
        <Box sx={{textAlign:'center', width:"250px"}}>
            <Button onClick={toggleDrawer} href='/' color="secondary" sx={{color:'#57606f', display:'block'}} key={0}>Home</Button>
            <Button onClick={toggleDrawer} href='/#courses' color="secondary" sx={{color:'#57606f', display:'block'}} key={2}>Courses</Button>
            <Button onClick={toggleDrawer} href='/#pricing' color="secondary" sx={{color:'#57606f', display:'block'}} key={3}>Pricing</Button>
            <Button  onClick={()=>{toggleDrawer();handleClose();}} variant="contained" sx={{ml:1,borderRadius:'30px'}} color='primary' key={4}>JOIN US</Button>
        </Box>
      </Drawer>
      <AppBar sx={{backgroundColor:'transparent', boxShadow:'none', position:'absolute', top:'0'}}>
        <Container maxWidth="xl">
            <Toolbar sx={{justifyContent:"space-between"}}>
                <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
                    <Image height={25} width={25} src='https://drive.google.com/uc?export=view&id=1tyUy_N43VKmtJ7YPZ1cM8fq2wkEMMQsm' alt="data"/>
                  <Link href='/'>
                    <span style={{color:"#2f3640", marginLeft:'5px', fontSize:'large'}}>CCourses</span>
                  </Link>
                </div>
                <Box sx={{display:{xs:"none", md:'block'}}}>
                    <Button href='/' color="secondary" sx={{color:'#57606f'}} key={0}>Home</Button>
                    <Button href='/#courses' color="secondary" sx={{color:'#57606f'}} key={2}>Courses</Button>
                    <Button href='/#pricing' color="secondary" sx={{color:'#57606f'}} key={3}>Pricing</Button>
                    <Button variant="contained" onClick={handleClose} sx={{ml:1,borderRadius:'30px'}} color='primary' key={4}>JOIN US</Button>
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
