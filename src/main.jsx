import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ZooSimulator from './ZooSimulator'
import Header from './Header'
import About from './About Folder/About'
import Home from './Home Folder/Home'
import Project from './Project Folder/Project'
import Service from './Service Folder/Service'
import Contact from './Contact Folder/Contact'
import Footer from '../Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <About/>
    <Project/>
    <Service/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
