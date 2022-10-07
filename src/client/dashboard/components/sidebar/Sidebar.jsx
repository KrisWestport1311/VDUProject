import "./sidebar.scss"

import GridViewIcon from '@mui/icons-material/GridView';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupIcon from '@mui/icons-material/Group';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo">Focus Safety</span></div>
        <hr />
        <div className="list">
            <ul>
              <p className="title">Main</p>          
                    <li>
                    <GridViewIcon className="icon"/>
                    <span>Dashboard</span></li>
              <p className="title">List</p>     
                    <li>
                    <GroupIcon className="icon"/>
                    <span>Users</span></li>
              <p className="title">Admin</p>      
                    <li>
                    <ExitToAppIcon className="icon"/>
                    <span>Log Out</span></li>
                
            </ul>
        </div>
    </div>

  )
}

export default Sidebar