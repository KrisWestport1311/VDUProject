import "./locationsform.scss"
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios"

export default function Login() {

  
  const initialValues= {name:"", address:"",county:"",contactperson:"",title:"",phonenumber:"",emailaddress:""}   //manage state of fields, initially set to empty objects
  
  const[formValues, setFormValues]= useState(initialValues); //create state 

  const[formErrors, setFormErrors]= useState({}); //create state for errors with initial state set to empty (nothing between the {})

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange= (e) => {
    
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
   
        
  } //function called handleChange binds the value of name, address etc and handles this change (whatever is inside the field will be the value as [name])

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    axios.post("http://localhost:5000/api/locations", formValues)
    
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
    if(!values.name){
      errors.name="Location name is required"
    }
    if(!values.address){
      errors.address="Location address is required"
    }
    if(!values.county){
      errors.county="Location county is required"
    }
    if(!values.contactperson){
      errors.contactperson="Name of contact person is required"
    }
    if(!values.title){
      errors.title="Work title of contact person is required"
    }
    if(!values.phonenumber){
      errors.phonenumber="Phone number is required"
    }
    if(!values.emailaddress){
      errors.emailaddress="Email address is required"
    } else if(!regex.test(values.emailaddress)){
      errors.emailaddress = "This is not a valid e-mail address"
    }
    return errors;
  }; //validates the form by first taking the form value and reviewing value

  return (
    
    <div className="login">
     

      <form 
        className="loginform" 
        method="POST"
        action="/api/locations"
        onSubmit={handleSubmit}>
       {Object.keys(formErrors).length === 0 && isSubmit ? 
        (<span className="logintitle">New Location Created</span>) : 
        (<span className="logintitle">Create New Location</span>)}
      

        <label>Name</label> 
        <input 
          type="text" 
          name="name" 
          placeholder="Enter name of new location" 
          value={formValues.name} 
          onChange={handleChange}
        />
        <p>{formErrors.name}</p>

        <label>Address</label> 
        <input 
          type="text" 
          name="address" 
          placeholder="Enter address of new location " 
          value={formValues.address} 
          onChange={handleChange}
        />
        <p>{formErrors.address}</p>

        <label>County</label> 
        <input 
          type="text" 
          name="county" 
          placeholder="Enter county of new location" 
          value={formValues.county} 
          onChange={handleChange}
        />
        <p>{formErrors.county}</p>

        <label>Contact Person</label> 
        <input 
          type="text" 
          name="contactperson" 
          placeholder="Contact person name at new location" 
          value={formValues.contactperson} 
          onChange={handleChange} 
        />
        <p>{formErrors.contactperson}</p>

        <label>Work Title</label> 
        <input 
          type="text" 
          name="title" 
          placeholder="Job title of contact person" 
          value={formValues.title} 
          onChange={handleChange}
        />
        <p>{formErrors.title}</p>

        <label>Phone Number</label> 
        <input 
          type="tel" 
          name="phonenumber" 
          placeholder="Enter new location phone number" 
          value={formValues.phonenumber} 
          onChange={handleChange}
        />
        <p>{formErrors.phonenumber}</p>

        <label>E-mail address</label> 
        <input 
          type="email" 
          name="emailaddress" 
          placeholder="Enter new location e-mail address" 
          value={formValues.emailaddress} 
          onChange={handleChange}
        /> 
        <p>{formErrors.emailaddress}</p>

        <button className="login_btn">Submit New Location</button>   
         
      </form>
        
        <NavLink 
        to="/"
        className="login_btn login_btn_reg">
        Home</NavLink> 

    </div>
  )
}
