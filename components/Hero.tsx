import { Box, Button, Container, Typography , Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions} from "@mui/material"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useState } from "react";

const Hero = () => {
    function handleClose(){
        setSubscriptionOpen(!SubscriptOpen);
    }
    let [SubscriptOpen, setSubscriptionOpen] = useState(false);

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
                    />
                </DialogContent>
                <DialogActions sx={{marginBottom:'1em', marginRight:'1em'}}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
            <div className="hero">
                <div className="hero-overlay">
                    <Container maxWidth="xl" sx={{textAlign:'center',display:'flex',flexDirection:"column", alignItems:'center', justifyContent:'center', height:'100vh', zIndex:1}}>
                        <Typography sx={{fontWeight:'700', fontSize:{xs:"32px", md:'56px'}, lineHeight:{xs:"42px", md:'70px'}}}>
                            Learn in-demand skills.
                        </Typography>
                        <Typography color={'primary'} sx={{fontWeight:'700',mb:"20px", fontSize:{xs:"32px", md:'56px'}, lineHeight:{xs:"42px", md:'70px'}}}>
                            Build your career.
                        </Typography>
                        <Typography variant='subtitle1' sx={{mt:{xs:"20px", md:"35px"},color:'rgb(36, 41, 48)',fontSize:{xs:"15px", md:'20px'},lineHeight:{xs:"20px",md:"30px"},  fontWeight:'300', mb:1}}>
                            The most efficient and supportive way for you to learn in-demand skills, get hired, and advance your career.
                        </Typography>
                        <Box sx={{mt:{xs:"30px",md:"35px"}}}>
                            <Button onClick={handleClose} size="large" color="primary" variant="contained" sx={{borderRadius:'50px', mr:"8px"}}>
                                JOIN US
                            </Button>
                            <Button href="#courses"  size='large' color="primary" variant="outlined" sx={{borderRadius:'50px', ml:'8px'}}>
                                View Courses
                            </Button>
                        </Box>

                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Hero;