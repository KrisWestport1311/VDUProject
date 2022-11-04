import React, {useState} from 'react';
import Logo from '../../../common/images/FSLOGOportrait.png'
import './sidebar.scss'
import {FiUsers, FiLogOut} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BsBook} from 'react-icons/bs'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'




const Sidebar = () => {

  const [currentLink, setCurrentLink] = useState (1);
  const [navbarState, setNavbarState] = useState(false);
  const handleClick =() => setNavbarState(!navbarState)

  return (
    <>
    <div className="side_container">
      <div className="top">
      <div className='logo'>
        <img src={Logo} alt="Focus Safety Logo"  className='logosize'/>
      </div>

      
      <div className="links">
        <ul className={navbarState ? 'side_nav active' : 'side_nav'}>
          <li 
          className = {currentLink === 1 ? "active" : ""}
          onClick = {() => setCurrentLink(1)}
          >
          <a href="/app">
                <FiUsers />
                <span> Users</span>
              </a>
          </li>


          <li
          className = {currentLink ===3 ? "active" : ""} 
          onClick = {() =>setCurrentLink(3)}
          >
          <a href="/app">
                <BsBookmarkCheck />
                <span> Assessments</span>
              </a>
          </li>
          
          <li 
          className = {currentLink ===2 ? "active" : ""}
          onClick = {() => setCurrentLink(2)}
          >
          <a href="/app">
                <GoLocation />
                <span> Locations</span>
              </a>
          </li>

          

          <li 
          className = {currentLink ===4 ? "active" : ""}
          onClick = {() => setCurrentLink(4)}
          >
          <a href="#">
                <BsBook />
                <span> Information</span>
              </a>
          </li>

          <li
          className = {currentLink ===5 ? "active" : ""} 
          onClick = {() => setCurrentLink(5)}
          >
          <a href="/app">
                <AiOutlineQuestionCircle />
                <span> FAQs</span>
              </a>
          </li>

          <li className="logout">
          
        <a href="/">
          <FiLogOut /> 
          <span >Log Out</span>
        </a>
      
          </li>
        
        </ul>  
        
        <div onClick={handleClick} className="side_hamburger">
          {navbarState ? (<AiOutlineCloseCircle  className='icon'/>) : (<AiOutlineMenu className='icon'/>)}
        
        </div>
      
      </div>
     

    </div>
    
    </div>
    </>
  )
}

export default Sidebar