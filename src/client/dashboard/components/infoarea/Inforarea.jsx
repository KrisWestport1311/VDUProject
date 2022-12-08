import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import './infoarea.scss'

import KSImg from '../../../common/images/KristianSheridan.jpg'

const Inforarea = () => {
  return (
    <div className="infoarea_container">
      <div className="title">
        <div>
          <img className="topImg" src={KSImg} alt="Kristian Sheridan Profile Headshot" />
        </div>
        <div>
          <h4>Welcome Kristian</h4>
          
        </div>
      </div>

      <div className="search">
        <AiOutlineSearch style={{ color: "var(--secondary-dark)" }} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Inforarea