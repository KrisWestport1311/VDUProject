import './hero.scss'
import HeroVideo from '../../../common/video.mp4'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={HeroVideo} type='video/mp4'/>
        </video>

        <div className="herotxt">
          <h1 style={{color: "var(--secondary-dark)"}}>Digital Workstation Assessments1</h1>
          <h2 style={{color: "var(--white)"}}>Remote Assessment Solution</h2>
          

          <div className="btn-group">
            
            
            <NavLink 
            to="/login" 
            className="btn">Log In </NavLink> 
                     
            <NavLink 
            to="/contactus" 
            className="btn btn-outline">Send a Message </NavLink>          
          </div>
        </div>
        
    </div>
  )
}

export default Hero