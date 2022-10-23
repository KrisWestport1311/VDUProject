import React from 'react'
import Analytics from "../analytics/Analytics"
import Faq from "../faq/Faq"
import Locations from "../locations/Locations"
import Assessor from "../assessor/Assessor"
import Inforarea from '../infoarea/Inforarea'
import Followups from '../followups/Followups'

import './mainarea.scss'

const Mainarea = () => {
  return (
    <div className='mainarea_container'>
        <Inforarea />    
    
        <div className="grid">
            <div className="row_one">
                <Analytics/>
                <Faq />
            </div>
            
            <div className="row_two">
                <Locations/>
                <Assessor /> 
                <Followups />
            </div>
    
    
        </div>    
        
     </div>
  )
}

export default Mainarea