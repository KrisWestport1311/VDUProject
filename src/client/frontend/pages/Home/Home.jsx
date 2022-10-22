import React from 'react'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Infoarea from '../../components/InfoArea/Infoarea'
import Menubar from '../../components/Menubar/Menubar'


function Home() {
  return (
    <div>
      <Menubar />
      <Hero />
      <About />
      <Infoarea/>
      <Footer/>
      
      
      
    
    </div>
    
  )
}

export default Home