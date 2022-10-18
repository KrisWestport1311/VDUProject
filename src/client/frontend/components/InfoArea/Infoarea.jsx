import React from 'react'
import './infoarea.scss'
import VDU from '../../components/images/VDU.png'

const Infoarea = () => {
  return (
    <div className='infoarea'>
        <div className="container">
        <div className="left">
            <h2>Digital platform of choice for smart professionals</h2>
            <p>An end-to-end service available <span className='blue'> ‘on demand’ </span>for employees in any work Location (s) at a time convenient to them. A simple and connected experience, for digital risk assessments, employee reports, recommended e-learning, live diary to assessor diaries for follow-up expert consultations (based risk score) and live Employer analytics and reporting.</p>
        </div>
        <div className="right">
            <div className='imgcontainer'>
                <img src={VDU} alt="VDU assessments from Focus Safety" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Infoarea