import { Box, Button, Card, Container, Typography } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done';

const Pricing = () => {
    return (
        <div id='pricing' style={{paddingBottom:'3.5em',paddingTop:'1em', backgroundColor:'rgb(156 136 255 / 5%)    '}}>
            <Typography color="GrayText" sx={{color:"#353b48",textAlign:"center", marginBottom:'2em'}} variant="h4">Choose a Plan</Typography>
            <Container maxWidth="xl" sx={{display:{md:'flex'}, marginY:'2em', justifyContent:'center', alignItems:'center'}}>
                <Card elevation={4} sx={{textAlign:"center",marginX:{xs:'auto', md:'4px'}, marginY:'12px', padding:'2em', height:'410px', width:'330px', borderRadius:'15px'}}>
                    <Typography variant='h6' sx={{marginBottom:"1em"}}>Free</Typography>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'1em'}}>
                        <Typography variant='h3' sx={{fontWeight:'500', display:'inline', marginRight:'8px'}}><span style={{fontSize:'18px'}} >$</span>0</Typography> 
                        <Typography variant='h5' color={'text.secondary"'} sx={{display:'inline'}}>/mon.</Typography>
                    </Box>
                    <Box sx={{marginTop:'3em', marginBottom:'2em'}}>
                        <Typography sx={{marginY:'8px',display:'flex', justifyContent:'center', alignItems:'center'}}><DoneIcon sx={{marginRight:'8px'}} />Unlimited hours of study.</Typography>
                        <Typography sx={{marginY:'8px',display:'flex', justifyContent:'center', alignItems:'center'}}><DoneIcon sx={{marginRight:'8px'}} />Unlimited access to all courses.</Typography>
                    </Box>
                    <Button size="large" variant="outlined" sx={{marginTop:'50px', width:'200px'}}>Get Started</Button>
                </Card>


                <Card elevation={4} sx={{textAlign:"center",marginX:{xs:'auto', md:'4px'}, marginY:'12px', padding:'0 2em 2em 2em', height:'450px', width:'330px', borderRadius:'15px'}}>
                    <Typography variant='subtitle1' sx={{marginBottom:"1em", backgroundColor:'#8c7ae6', width:'fit-content', marginX:'auto', padding:'8px 8px 18px 8px', color:'white',clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 79%, 0 100%)'}}>Most Popular</Typography>
                    <Typography variant='h6' sx={{marginBottom:"1em"}}>Standard</Typography>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'1em'}}>
                        <Typography variant='h3' sx={{fontWeight:'500', display:'inline', marginRight:'8px'}}><span style={{fontSize:'18px'}} >$</span>49.99</Typography> 
                        <Typography variant='h5' color={'text.secondary"'} sx={{display:'inline'}}>/mon.</Typography>
                    </Box>
                    <Box sx={{marginTop:'3em', marginBottom:'2em'}}>
                        <Typography sx={{marginY:'8px',display:'flex', justifyContent:'center', alignItems:'center'}}><DoneIcon sx={{marginRight:'8px'}} />Everything in free version.</Typography>
                        <Typography sx={{marginY:'8px',display:'flex', justifyContent:'center', alignItems:'center'}}><DoneIcon sx={{marginRight:'8px'}} />Email support.</Typography>
                    </Box>
                    <Button size="large" variant="contained" sx={{marginTop:'55px', width:'200px'}}>Buy Now</Button>
                </Card>


                <Card elevation={4} sx={{textAlign:"center",marginX:{xs:'auto', md:'4px'}, marginY:'12px', padding:'2em', height:'410px', width:'330px', borderRadius:'15px'}}>
                    <Typography variant='h6' sx={{marginBottom:"1em"}}>Premium</Typography>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'1em'}}>
                        <Typography variant='h3' sx={{fontWeight:'500', display:'inline', marginRight:'8px'}}><span style={{fontSize:'18px'}} >$</span>99.99</Typography> 
                        <Typography variant='h5' color={'text.secondary"'} sx={{display:'inline'}}>/mon.</Typography>
                    </Box>
                    <Box sx={{marginTop:'3em', marginBottom:'2em'}}>
                        <Typography sx={{marginY:'8px',display:'flex', justifyContent:'center', alignItems:'center'}}><DoneIcon sx={{marginRight:'8px'}} />Everything in standard version.</Typography>
                        <Typography sx={{marginY:'8px',display:'flex', justifyContent:'center', alignItems:'center'}}><DoneIcon sx={{marginRight:'8px'}} />24/7 customer support.</Typography>
                    </Box>
                    <Button size="large" variant="outlined" sx={{marginTop:'50px', width:'200px'}}>Buy Now</Button>
                </Card>
            </Container>
        </div>
    );
}

export default Pricing;