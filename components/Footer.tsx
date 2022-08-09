import { Container, Typography } from "@mui/material"
import { NextPage } from "next";
import logo from '../c.png'
import Link from "next/link";
import Image from "next/image";

const Hero: NextPage = () => {
    return (
        <Container sx={{textAlign:'center', display:{md:'flex'}, justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
                <Link href='/'>
                <Image height={25} width={25} src={logo} />
                </Link>
                <Link href='/'>
                <span style={{color:"#2f3640", marginLeft:'5px', fontSize:'large'}}>CCourses</span>
                </Link>
            </div>
            <Typography variant="body1">Copyright &copy; 2022, CCourses.</Typography>
        </Container>
    );
}

export default Hero;