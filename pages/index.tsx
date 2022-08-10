import { ThemeProvider } from '@emotion/react'
import { Container, Divider, Typography, Box } from "@mui/material"
import { createTheme, responsiveFontSizes } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Course from '../components/course'
import Pricing from '../components/Pricing'


interface propType{
  courses: {title:string, price:'string', id:number, image:string}[]
}


const Home: NextPage<propType> = ({courses}) => {
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

export async function getServerSideProps() {
    
  const res = await fetch('http://localhost:3000/api/courses');
  const courses = (await res.json()).courses;

  return {
    props: {courses},
  }
}

export default Home
