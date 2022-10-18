import React from 'react'
import {RiServiceFill} from 'react-icons/ri'
import {GiDuration} from 'react-icons/gi'
import {BiCertification} from 'react-icons/bi'
import {DiRequirejs} from 'react-icons/di'
import AboutCard from '../AboutCard/AboutCard'
import './about.scss'


const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <h2>VDU Risk Assessments Overview</h2>
            <p>VDU Risk Assessments, also known as Display Screen Equipment Risk Assessments (DSE) are a legal requirement under the “2007 General Application Regulations”. These Online VDU/DSE Assessments are perfect for remote workers who are working from home.</p>
            <div className="card-container">
                <div className="card">'
                <AboutCard icon={<GiDuration className='icon' />} heading='Duration' text='Online meeting  lasts 20-30mins to assess workstation, depending on the individual’s needs or predefined injuries.'/>
                </div>

                <div className="card">'
                <AboutCard icon={<BiCertification className='icon' />} heading='Certification' text='OWe will complete a full report in order to comply with the legislation and the VDU assessment process should be renewed.'/>
                </div>

                <div className="card">'
                <AboutCard icon={<DiRequirejs className='icon' />} heading='Requirements' text='We require that the person being assessed takes part actively in the assessment in order to maximise the results. '/>
                </div>

                <div className="card">'
                <AboutCard icon={<RiServiceFill className='icon' />} heading='Who is it for?' text='Employers are required to undertake VDU Assessments on workstations where an employee will spend >1 hour per day.'/>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default About