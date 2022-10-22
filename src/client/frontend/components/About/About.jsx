import React from 'react'

import AboutCard from '../AboutCard/AboutCard'
import './about.scss'
import Img1 from '../../../common/images/Image1.png'
import Img2 from '../../../common/images/Image2.png'
import Img3 from '../../../common/images/Image3.png'
import Img4 from '../../../common/images/Image4.png'


const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <h2>VDU Risk Assessments Overview</h2>
            <p>VDU Risk Assessments, also known as Display Screen Equipment Risk Assessments (DSE) are a legal requirement under the “2007 General Application Regulations”. These Online VDU/DSE Assessments are perfect for remote workers who are working from home.</p>
            <div className="card-container">
              
                <div className="card">
                <img
              src={Img2}
              alt="image1"
              style={{width:"150px", height:"auto"}}
              />
                <AboutCard heading='Duration' text='Online meeting  lasts 20-30mins to assess workstation, depending on the individual’s needs or predefined injuries.'/>
                </div>

                <div className="card">
                <img
              src={Img1}
              alt="image1"
              style={{width:"150px", height:"auto"}}
              />
                <AboutCard heading='Certification' text='We will complete a full report in order to comply with the legislation and the VDU assessment process should be renewed.'/>
                </div>

                <div className="card">
                <img
              src={Img3}
              alt="image1"
              style={{width:"150px", height:"auto"}}
              />
                <AboutCard heading='Requirements' text='We require that the person being assessed takes part actively in the assessment in order to maximise the results. '/>
                </div>

                <div className="card">
                <img
              src={Img4}
              alt="image1"
              style={{width:"150px", height:"auto"}}
              />
                <AboutCard heading='Who is it for?' text='Employers are required to undertake VDU Assessments on workstations where an employee will spend >1 hour per day.'/>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default About