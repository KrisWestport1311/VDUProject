import "./summary.scss" 
import { CircularProgressbar } from 'react-circular-progressbar'; //https://www.npmjs.com/package/react-circular-progressbar
import 'react-circular-progressbar/dist/styles.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Summary = () => {
  return (
    <div className="summary">
    <div className="toparea">
        <h1 className="title">Total Inspections</h1>
        <MoreVertIcon className="iconarea"/>
    </div>
    
    <div className="bottomarea">
        <div className="featuredarea">
            <CircularProgressbar value={65} text={"65%"} strokeWidth="6"/>
        </div>
         <p className="title">Total Inspections carried out this month</p>
         <p className="amount">€45</p>
         <p className="description">A lot of info to go here</p>

         <div className="summary">
         
         </div>
    
    </div>
    
    
    
    
    </div>
  )
}

export default Summary