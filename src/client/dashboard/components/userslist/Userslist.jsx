import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios"
import './userslist.scss' ;


function Userslist() {

  const [users,setUser] = useState([]); //setUser to empty array

  //use the useEffect hook to call the getUSers function below

  useEffect (() =>{
    getUsers();
  }, []);



  //create function to retrieve data all data from the API

  const getUsers = async() => {
    const response = await axios.get('http://localhost:5000/api/users');
    setUser(response.data);
  }



  return (
    <div className='users_container'>
    <table className='table'>
      <thead>
      <tr>
        <th>No</th>
        <th>Username</th>
        <th>Email address</th>
       </tr> 
      </thead>
      <tbody>
      {users.map((user, index)=>(
          <tr key={user._id}>
          <td>{index + 1}</td>
          <td width="20%">{user.username}</td>
          <td width="30%">{user.email}</td>
          <td className="btn-group" width="20%">
            <button className="btn btn-outline">Edit</button>
            <button className="btn">Delete</button>
          </td>
        </tr>
      ))}
        
        
      </tbody>
    </table>
    
    
          
          <Link to="/app/adduser">
                
                <button className="btn btn-outline">Add New User</button>
              </Link>
          
    </div>
    
  )
}

export default Userslist