import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import './infoarea.scss'
import Logo from '../../../common/images/FSLOGOlandscape.png'

const Inforarea = () => {
  return (
   <div className='infoarea_container'>
    <div className='title'>
        <h4>Hi Kristian, welcome to </h4>
         <img src={Logo} alt="Focus Safety Logo"  className='logosize'/>
    </div>

    <div className="search">
        <AiOutlineSearch style={{color:"var(--secondary-dark)"}}/>
        <input type="text" placeholder="Search"/>
        
    </div>
    
</div>
  )
}

export default Inforarea