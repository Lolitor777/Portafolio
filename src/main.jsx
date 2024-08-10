import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Portafolio } from './Portafolio'
import './style.css'
import 'animate.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Portafolio />
    </BrowserRouter>
  </React.StrictMode>,
)
