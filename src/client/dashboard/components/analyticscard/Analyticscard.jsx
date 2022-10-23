import React from 'react'
import '../analytics/analytics.scss'

const Analyticscard = (props) => {
  return (
    <div className='analytic_card'>
        <div className="ac_left">
            <h3>{props.heading}</h3>
            <p>{props.value}</p>
        </div>   
        
        <div className="ac_right">
            <div className="ac_icon_container">
            {props.icon}
            </div>
        </div>
    
    </div>
  )
}

export default Analyticscard