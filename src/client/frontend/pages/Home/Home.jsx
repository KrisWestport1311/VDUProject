import React from 'react'
import About from '../../components/About/About'
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
      
    
    </div>
    
  )
}

export default Home