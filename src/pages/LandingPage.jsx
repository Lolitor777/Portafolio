import { Navbar } from '../ui';
import { Presentation, AboutMe, Technologies, Projects, Testimonies, Footer } from '../components'

export const LandingPage = () => {
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
