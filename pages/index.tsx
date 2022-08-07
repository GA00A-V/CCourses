import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  let theme = createTheme({
    palette:{
      primary: {
        main: '#8c7ae6'
      }
    }
  })
  return (
    <div style={{fontFamily:'"Roboto","Helvetica","Arial",sans-serif'}}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Ccourses | Home</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <Header/>
        <Hero />
        <About/>
      </ThemeProvider>
    </div>
  )
}

export default Home