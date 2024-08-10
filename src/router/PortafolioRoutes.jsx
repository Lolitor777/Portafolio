import { Navigate, Route, Routes } from "react-router-dom"
import { ContactPage, LandingPage, NotFoundPage } from "../pages"


export const PortafolioRoutes = () => {


  return (
    <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="contact" element={ <ContactPage /> } />
        <Route path="404-not-found" element={ <NotFoundPage /> } />

        <Route path="/*" element={ <Navigate to='404-not-found' /> } />
    </Routes>
  )
}
