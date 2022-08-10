import { ThemeProvider } from '@emotion/react'
import { Container, Divider, Typography, Box } from "@mui/material"
import { createTheme, responsiveFontSizes } from '@mui/material'
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Course from '../components/course'
import Pricing from '../components/Pricing'

let courses = [
  {id:1,image:'https://drive.google.com/uc?export=view&id=1OLaWoHsvD2ZBN_a2Popc-mycBWdOEi01',title:"Python's Course", price:'FREE'},
  {id:2,image:'https://drive.google.com/uc?export=view&id=1Bkrt4Dw5GubwSrQOfUIOnQgleXlvqeuB',title:"JavaScript's Course", price:'FREE'},
  {id:3,image:'https://drive.google.com/uc?export=view&id=1iK51T97dmIYXy0asmRksLp3gJN1HI8On',title:"Rust Programming Course", price:'FREE'},
  {id:4,image:'https://drive.google.com/uc?export=view&id=13x89z-tEkrRbv61EoAyniWBIbunZvi2h',title:"Computer Networking Course", price:'FREE'},
  {id:5,image:'https://drive.google.com/uc?export=view&id=1v7zN3WZuviswGkceWQJA150Gi5ZXhvof',title:"Linux Programming Course", price:'FREE'},
];

const Home: NextPage = () => {
  let theme = createTheme({
    palette:{
      primary: {
        main: '#8c7ae6'
      }
    }
  })
  theme = responsiveFontSizes(theme);
  return (
    <div style={{fontFamily:'"Roboto","Helvetica","Arial",sans-serif'}}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>CCourses | Learn in demand skill and build your career</title>
        </Head>
        <Header/>
        <Hero />
        <Container maxWidth="xl" id='courses' sx={{textAlign:'center', paddingBottom:'1em', marginBottom:"3em"}}>
            <Divider sx={{width:{md:'40%'}, textAlign:"center", margin:'auto'}}>
                <Typography sx={{marginY:"1em", color:"#353b48"}} variant="h4">Our Courses</Typography>
            </Divider>
            <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {
                  courses.map(course=>(<Course title={course.title} price={course.price} key={course.id} image={course.image} />))
                }
            </Box>
        </Container>
        <Pricing/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}


export default Home
