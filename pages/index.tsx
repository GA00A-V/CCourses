import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
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
          <title>CCourses | Learn in demand skill and build your career</title>
        </Head>
        <Header/>
        <Hero />
      </ThemeProvider>
    </div>
  )
}

export default Home
