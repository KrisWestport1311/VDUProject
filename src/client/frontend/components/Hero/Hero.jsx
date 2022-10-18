import './hero.scss'
import HeroVideo from '../../../common/video.mp4'

const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={HeroVideo} type='video/mp4'/>
        </video>

        <div className="herotxt">
          <h1 style={{fontSize:'6rem', color: "#2a5a86"}}>Absolute testing</h1>
          <h1><span className="blue">Everyday</span></h1>
          <p>guaranteed testing results</p>

          <div className="btn-group">
            <button className="btn">Use Focus Safety</button>
            
            <button className="btn btn-outline">Contact Us</button>          
          </div>
        </div>
        
    </div>
  )
}

export default Hero