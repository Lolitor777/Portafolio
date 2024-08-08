import React from 'react'
import { Navbar } from './ui'
import { AboutMe, Footer, Presentation, Projects, Technologies, Testimonies } from './components'

export const PortafolioApp = () => {
  return (
    <>
      <Navbar />

      <Presentation />

      <AboutMe />

      <Technologies />

      <Projects />

      <Testimonies />

      <Footer />
    </>
  )
}
