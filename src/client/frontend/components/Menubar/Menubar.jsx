import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'
import '../../../../index.scss'
import './menubar.scss'
import Logo from '../../../common/images/FSLOGO.png'




const Menubar = () => {
  



  const [click, setClick] = useState(false) //not active until we click it //
    const handleClick =() => setClick(!click)

  return (
    <div className='menubar'>
        <div className="container">
            <img src={Logo} alt="Focus Safety Logo"  className='logosize'/>
            
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
                  Developer3
                  </NavLink>
              </li> 
              <li className='nav-item'>
                  <NavLink
                  to="/app"
                  
                  >
                  SIGN UP
                  </NavLink>
              </li> 
              <li className='nav-item'>
                  <NavLink
                  to="/app"
                  className='btn'
                  >
                  Log In
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