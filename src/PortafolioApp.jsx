import React from 'react'
import { Navbar } from './ui'
import { AboutMe, Presentation, Projects, Technologies } from './components'

export const PortafolioApp = () => {
  return (
    <>
      <Navbar />

      <Presentation />

      <AboutMe />

      <Technologies />

      <Projects />
    </>
  )
}
