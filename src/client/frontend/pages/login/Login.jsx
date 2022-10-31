import "./login.scss"
import HeroVideo from '../../../common/video.mp4'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    
    <div className="login">
    <video autoPlay loop muted id='video'>
            <source src={HeroVideo} type='video/mp4'/>
        </video>
      <form className="loginform">
      <span className="logintitle">Login</span>
        <label>Email</label> 
        <input type="text" placeholder="Enter your e-mail address" required/>
        <label>Password</label> 
        <input type="password" placeholder="Enter your password" required/> 
        <button className="login_btn">Log in</button>   
        <p>Not yet registered?</p>
        <NavLink
        to="/register"
        className="login_btn_outline">Register</NavLink>  
      </form>
        
        <NavLink 
        to="/"
        className="login_btn login_btn_reg">
        Home</NavLink> 

    </div>
  )
}
