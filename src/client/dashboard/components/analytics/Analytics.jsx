import './analytics.scss'
import {BsFillBarChartFill, BsFillGeoFill, BsFillPersonFill, BsCalendar3} from 'react-icons/bs';
import Analyticscard from '../analyticscard/Analyticscard'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



const Analytics = () => {

    const [count, setCount] = useState("")
    const [alocations, setAlocations] = useState("")
    const [ausers, setAusers] = useState("")


    useEffect(()=>{
      getCount();
    }, []);

    useEffect(()=>{
      getAlocations();
    }, []);

    useEffect(()=>{
      getAusers();
    }, []);

    const getCount = async ()=>{
      const response = await axios.get("http://localhost:5000/api/assessments")
      
      setCount(response.data.length)
    };

    const getAlocations = async ()=>{
      const response = await axios.get("http://localhost:5000/api/locations");
      
      setAlocations(response.data.length)
    };

    const getAusers = async ()=>{
      const response = await axios.get("http://localhost:5000/api/users/");
      
      setAusers(response.data.length)
    };



  return (
    <div className="analytics_container">
      
        <div> 
        <Analyticscard 
        heading='Assessments completed'
        value={count} 
        icon={<BsFillBarChartFill/>}/></div>

        <div> <Analyticscard 
        heading='Locations assessed'
        value={alocations} 
        icon={<BsFillGeoFill/>}/></div>

        <div> <Analyticscard 
        heading='Users in total'
        value={ausers} 
        icon={<BsFillPersonFill/>}/></div>

        <div> <Analyticscard 
        heading='Follow Ups'
        value='2565' 
        icon={<BsCalendar3/>}/></div>

      

    </div>
  )
}

export default Analytics