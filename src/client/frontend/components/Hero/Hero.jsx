import './hero.scss'
import HeroVideo from '../../../common/video.mp4'

const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={HeroVideo} type='video/mp4'/>
        </video>

        <div className="herotxt">
          <h1 style={{color: "var(--secondary-dark)"}}>Digital Workstation Assessments</h1>
          <h2 style={{color: "var(--white)"}}>Remote Assessment Solution</h2>
          

          <div className="btn-group">
            <button className="btn">Log In</button>
            
            <button className="btn btn-outline">Send a Message</button>          
          </div>
        </div>
        
    </div>
  )
}

export default Hero