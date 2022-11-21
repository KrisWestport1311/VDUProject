import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios"
import './locations.scss' ;


function Locations() {

  const [users,setUser] = useState([]); //setUser to empty array

  //use the useEffect hook to call the getUSers function below

  useEffect (() =>{
    getUsers();
  }, []);



  //create function to retrieve data all data from the API

  const getUsers = async() => {
    const response = await axios.get('http://localhost:5000/api/locations');
    setUser(response.data);
  }



  return (
    <div className='locations_container'>
    
    <table className='table'>
      <thead>
      <tr>
        <th>No</th>
        <th>Address</th>
        <th>County</th>
        <th>Contact Person</th>
        <th>Phone Number</th>
        <th>Actions</th>
       

        
       </tr> 
      </thead>
      <tbody>
      {users.map((user, index)=>(
          <tr key={user._id}>
          <td>{index +1}</td>
          <td>{user.address}</td>
          <td>{user.county}</td>
          <td>{user.contactperson}</td>
          <td>{user.phonenumber}</td>
          
          <td className="btn-group">
            <Link
            to={`/app/edituser/${user._id}`} 
            className="btn btn-outline">Edit
            </Link>
            <button className="btn">Delete</button>
          </td>
        </tr>
      ))}
        
        
      </tbody>
    </table>
    
    
          
          <Link to="/app/locationsform">
                
                <button className="btn btn-outline">Add New Location</button>
              </Link>
         
    </div>
    
  )
}

export default Locations