import "./register.scss"
import HeroVideo from '../../../common/video.mp4'
import { NavLink } from 'react-router-dom'

export default function Register() {
  return (
    
    <div className="register">
    <video autoPlay loop muted id='video'>
            <source src={HeroVideo} type='video/mp4'/>
        </video>
      <form className="registerform">
      <span className="registertitle">Register New User</span>
        <label>Username</label> 
        <input type="text" placeholder="Enter your username" minlength="7" required/>
        <label>E-mail</label> 
        <input type="email" placeholder="Enter your e-mail address" required/> 
        <label>Password</label> 
        <input type="password" placeholder="Enter your password" required/> 
        <button className="register_btn">Register</button>   
          
      </form>
        
        <NavLink 
        to="/"
        className="register_btn register_btn_reg">
        Home</NavLink> 

    </div>
  )
}
