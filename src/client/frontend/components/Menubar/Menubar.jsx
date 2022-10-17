import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'
import '../../../../index.scss'
import './menubar.scss'

const Menubar = () => {
    const [click, setClick] = useState(false) //not active until we click it //
    const handleClick =() => setClick(!click)

  return (
    <div className='menubar'>
        <div className="container">
            <h1 style={{marginLeft: '1rem', color: '#238aa1'}}>FocusSafety</h1>
            <ul className={click ? 'nav active' : 'nav'}>
              <li className='nav-item'>
                  <NavLink
                  to="/app"
                  
                  >
                  Developer
                  </NavLink>
              </li>    
              <li className='nav-item'>
                  <NavLink
                  to="/app"
                  
                  >
                  Developer2
                  </NavLink>
              </li> 
              <li className='nav-item'>
                  <NavLink
                  to="/app"
                  
                  >
                  Developer3
                  </NavLink>
              </li> 
              <li className='nav-item'>
                  <NavLink
                  to="/app"
                  
                  >
                  Developer4
                  </NavLink>
              </li> 
              <li className='nav-item'>
                  <NavLink
                  to="/app"
                  className='btn'
                  >
                  Developer
                  </NavLink>
              </li>       
            </ul>
             <div onClick={handleClick}  className="hamburger">
                {click ? (<AiOutlineCloseCircle  className='icon'/>) : (<AiOutlineMenu className='icon'/>)}
                
             </div>
            
            
        
        </div>    
    </div>
  )
}

export default Menubar