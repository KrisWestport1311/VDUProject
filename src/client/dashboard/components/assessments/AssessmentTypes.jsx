import React from 'react'
import './assessmenttypes.scss'
import { Link } from 'react-router-dom';
import {BiBarChartSquare} from "react-icons/bi";

function AssessmentTypes() {
  return (
    <div className='assesm_container'>
    
    <Link to="/vduassessment">
                <BiBarChartSquare />
                <span> Dashboard</span>
              </Link>
              </div>
  )
}

export default AssessmentTypes