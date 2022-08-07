import { Box, Button, Container, Divider, Toolbar, Typography } from "@mui/material"
import { NextPage } from "next"

const About: NextPage = () => {
    return (
        <div id="about">
            <Toolbar/>
            <div style={{backgroundColor:"#8c7ae60a"}}>
                <Container sx={{textAlign:'center', pt:"30px"}}>
                    <Divider sx={{width:{xs:"80%", md:"35%"}, margin:'auto'}}>
                        <Typography sx={{fontSize:{xs:"15px", md:'20px'}, color:'#718093'}}>About Us</Typography>
                    </Divider>
                </Container>
            </div>
        </div>
    );
}

export default About;