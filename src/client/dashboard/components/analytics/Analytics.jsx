import './analytics.scss'
import {BsFillBarChartFill, BsFillGeoFill, BsFillPersonFill, BsCalendar3} from 'react-icons/bs';
import Analyticscard from '../analyticscard/Analyticscard'

const Analytics = () => {
  return (
    <div className="analytics_container">
      
        <div> 
        <Analyticscard 
        heading='Assessments this month'
        value='24' 
        icon={<BsFillBarChartFill/>}/></div>

        <div> <Analyticscard 
        heading='Locations this month'
        value='25' 
        icon={<BsFillGeoFill/>}/></div>

        <div> <Analyticscard 
        heading='Users in total'
        value='324' 
        icon={<BsFillPersonFill/>}/></div>

        <div> <Analyticscard 
        heading='Follow Ups'
        value='2565' 
        icon={<BsCalendar3/>}/></div>

      

    </div>
  )
}

export default Analytics