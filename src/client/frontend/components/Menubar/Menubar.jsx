import {FaBars, FaTimes} from 'react-icons/fa'
import React, {useState} from 'react'

import './menubar.scss' 
import '../../../../../src/index.scss'
import logo from '../../../common/images/FSLOGO.png'




const Menubar = () => {

const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

  return (
    <div className="header">
        <nav className='menubar'>
            <a href='/' className='logo'>
                <img src ={logo} alt='FSLogo' />            
            </a>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} />) : <FaBars size={20} />}
                
            </div>

            <ul className={click ? "navmenuactive" : "navmenu"}>
                <li className='navitem'>
                    <a href='/'>Home</a>
                </li>
                <li className='navitem'>
                    <a href='/'>About Us</a>
                </li>
                <li className='navitem'>
                    <a href='/'>Testimonials</a>
                </li>
                <li className='navitem'>
                    <a href='/'>Demo</a>
                </li>
            </ul>
        </nav>
    
    
    </div>
  )
}

export default Menubar