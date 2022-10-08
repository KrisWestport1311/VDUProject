import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';
import "./dashboardHome.scss";

const DashboardHome = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
      <Navbar/>
      <div className="widget">
      <Widgets type="user"/> {/*passing a prop to each of the widgets*/}
      <Widgets type="order"/>
      <Widgets type="earnings"/>
      <Widgets type="balance"/>
      </div>
      </div>
    
    </div>
  )
}

export default DashboardHome
