import "./edituser.scss"

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {

  const { id } = useParams();

  const initialValues= {username:"", email:"", password:""}   
  
  const[formValues, setFormValues]= useState(initialValues); //create state 

  const[formErrors, setFormErrors]= useState({}); //create state for errors with initial state set to empty (nothing between the {})

  const [isSubmit, setIsSubmit] = useState(false);


  const navigate = useNavigate();

  const handleChange= (e) => {
    
const {name, value} = e.target;
    setFormValues({...formValues,  [name]:value});
   
        
  } //function called handleChange binds the value of name, email etc and handles this change (whatever is inside the field will be the value as [name])

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    axios.put(`http://localhost:5000/api/users/${id}`, formValues);
    navigate("/app/userslist");
    
  }

  useEffect(()=>{
    console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit){
  console.log(formValues);
}
  }, );

  const validate =(values) =>{
    const errors = {}; 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
    if(!values.username){
      errors.username="Location name is required"
    }
    if(!values.email){
      errors.email="Email address is required"
    }
    if(!values.password){
      errors.password="password is required"
    }
    
    return errors;
  }; //validates the form by first taking the form value and reviewing value

  return (
    <div className="eu_container">
      <form
        className="loginform_1"
        method="PUT"
        action="/api/users"
        onSubmit={handleSubmit}
      >
        <div className="registertitle">Edit Existing Location</div>
          <div>
            <label>Edit Existing User</label>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Enter new name for user"
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.name}</p>

          <div>
            <label>Email address</label>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter new e-mail address for user"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>

          <div>
            <label>Password</label>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
          <button className="login_btn">Update User</button>
        
      </form>
    </div>
  );
}


