import React from 'react'
import Analytics from "../analytics/Analytics"
import Faq from "../faq/Faq"
import Inforarea from '../infoarea/Inforarea'
import Assessmenttypes from '../../components/charts/assessmenttypes/Assessmenttypes'
import Equipment from '../../components/charts/equipment/Equipment'
import Discomfort from '../../components/charts/discomfort/Discomfort'

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
                <Assessmenttypes />
                <Assessmenttypes />
                <Assessmenttypes />
            </div>
    
    
        </div>    
        
     </div>
  )
}

export default Mainarea