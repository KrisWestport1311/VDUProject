import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../common/images/FSLOGOportrait.png'
import './sidebar.scss'
import {FiUsers, FiLogOut} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BsBook} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'
import {BiBarChartSquare} from "react-icons/bi";
import { useSelector } from "react-redux";
import { logout } from '../../../../redux/userSlice';
import { useDispatch } from "react-redux";



const Sidebar = () => {

  const name = useSelector((state) => state.user.currentUser.username);

  const [currentLink, setCurrentLink] = useState ();
  const [navbarState, setNavbarState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick =() => setNavbarState(!navbarState);

  const handleLogout =(e)=>{
    e.preventDefault();
    dispatch(logout)
    navigate("/");
  }

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
          <Link to="/app/mainarea">
                <BiBarChartSquare />
                <span> Dashboard</span>
              </Link>
          </li>


          <li
          className = {currentLink ===2 ? "active" : ""} 
          onClick = {() =>setCurrentLink(2)}
          >
          <Link to="/app/assessmenttypes">
                <BsBookmarkCheck />
                <span> Assessments</span>
              </Link>
          </li>

          <li 
          className = {currentLink === 3 ? "active" : ""}
          onClick = {() => setCurrentLink(3)}
          >
          <Link to="/app/userslist">
                <FiUsers />
                <span> Candidates</span>
              </Link>
          </li>


          <li 
          className = {currentLink ===4 ? "active" : ""}
          onClick = {() => setCurrentLink(4)}
          >
          <Link to ="/app/locations">
                <GoLocation />
                <span> Locations</span>
              </Link>
          </li>

          

          <li 
          className = {currentLink ===5 ? "active" : ""}
          onClick = {() => setCurrentLink(5)}
          >
          <Link to="/app/information">
                <BsBook />
                <span> Information</span>
              </Link>
          </li>

         

          <button className="logout" onClick={handleLogout}>
          
        <a href="/">
          <FiLogOut /> 
          <span >Log Out {name}</span>
        </a>
      
          </button>
        
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