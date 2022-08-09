import { Box, Button, Container, Typography } from "@mui/material"
import { NextPage } from "next"
import Image from "next/image";

const Hero: NextPage = () => {
    return (
        <div className="hero">
            <div className="hero-overlay">
                <Container sx={{textAlign:'center',display:'flex',flexDirection:"column", alignItems:'center', justifyContent:'center', height:'100vh', zIndex:1}}>
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
                        <Button href="#newsletter" color="primary" variant="contained" sx={{borderRadius:'50px', mr:"8px"}}>
                            JOIN US
                        </Button>
                        <Button href="#courses" color="primary" variant="outlined" sx={{borderRadius:'50px', ml:'8px'}}>
                            View Courses
                        </Button>
                    </Box>

                </Container>
            </div>
        </div>
    );
}

export default Hero;