import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import RateAlert from './pages/RateAlert.jsx'
import AboutMe from './pages/AboutMe.jsx'
import ContactMe from './pages/ContactMe.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='rate-alert' element={<RateAlert />} />
      <Route path='about' element={<AboutMe />} />
      <Route path='contact' element={<ContactMe />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
