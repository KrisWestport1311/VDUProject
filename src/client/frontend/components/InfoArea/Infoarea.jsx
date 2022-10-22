import React from 'react'
import './infoarea.scss'
import Img5 from '../../../common/images/Image5.png'

const Infoarea = () => {
  return (
    <div className='infoarea'>
        <div className="container">
        <div className="left">
            <h2>Digital platform of choice for smart professionals</h2><br/>
            <p>Reporting and analytics across your employee base with a breakdown of data across each category. Employers will have real-time access to their reporting and analytics dashboard providing the ability to deep dive into any demographic,  Department or risk category . Over time, you will see the history & trends of your employees.  

You will have a dedicated customer success executive for continued and extensive support.</p>
        </div>
        <div className="right">
            <div className='imgcontainer'>
                <img src={Img5} alt="VDU assessments from Focus Safety" style={{color:"var(--white)"}}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Infoarea