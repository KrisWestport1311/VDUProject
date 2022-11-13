import "./dashboardHome.scss";


import Sidebar from "../../components/sidebar/Sidebar";
import Mainarea from "../../components/mainarea/Mainarea";
import { Outlet } from "react-router-dom";


const DashboardHome = () => {
  return (
    <div className='dashboard'>
    
    <Sidebar/>
      <div>
      <Outlet/>
      </div>
      
    
    </div>
  )
}

export default DashboardHome
