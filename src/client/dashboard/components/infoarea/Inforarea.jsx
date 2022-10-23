import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import './infoarea.scss'
import Logo from '../../../common/images/FSLOGOlandscape.png'

const Inforarea = () => {
  return (
   <div className='infoarea_container'>
    <div className='title'>
        <h4>Hi Kristian</h4>
        <h1 className='h1_small'>Welcome to <img src={Logo} alt="Focus Safety Logo"  className='logosize'/></h1>
    </div>

    <div className="search">
        <AiOutlineSearch style={{color:"var(--secondary-dark)"}}/>
        <input type="text" placeholder="Search"/>
        
    </div>
    
</div>
  )
}

export default Inforarea