import "./widgets.scss"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';

const Widgets = () => {
  return (
    <div className="widgets">
        <div className="left"> 
            <span className="title">USERS</span>          
            <span className="counter">12345</span>          
            <span className="link">See all Users</span>
            </div>
        <div className="right">
            <div className="percentage positive">
            <ArrowUpwardIcon/>
            20%
            </div>
            <PersonIcon className="icon"/>
        </div>   
    </div>
  )
}

export default Widgets