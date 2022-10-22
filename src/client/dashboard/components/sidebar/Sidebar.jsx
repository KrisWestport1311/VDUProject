import React from 'react';
import Logo from '../../../common/images/FSLOGOportrait.png'
import './sidebar.scss'
import {FiUsers, FiLogOut} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
import {BsBookmarkCheck} from 'react-icons/bs'
import {BsBook} from 'react-icons/bs'
import {AiOutlineQuestionCircle} from 'react-icons/ai'




const Sidebar = () => {
  return (
    <div className="side_container">
      <div className="top">
      <div className='logo'>
        <img src={Logo} alt="Focus Safety Logo"  className='logosize'/>
      </div>

      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li><a href="/">
                <FiUsers />
                <span> Users</span>
              </a>
          </li>

          <li><a href="/">
                <GoLocation />
                <span> Locations</span>
              </a>
          </li>

          <li><a href="/">
                <BsBookmarkCheck />
                <span> Assessments</span>
              </a>
          </li>

          <li><a href="/">
                <BsBook />
                <span> Information</span>
              </a>
          </li>

          <li><a href="/">
                <AiOutlineQuestionCircle />
                <span> FAQs</span>
              </a>
          </li>
        
        </ul>      
      
      </div>
      <div className="logout">
        <a href="/">
          <FiLogOut /> 
          <span className='logout'>Log Out</span>
        </a>
      </div>

    </div>
    </div>
  )
}

export default Sidebar