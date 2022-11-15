import { Routes, Route } from "react-router-dom"

import DashboardHome from "./client/dashboard/pages/Dashboardhome/DashboardHome";
import Users from "./client/dashboard/pages/users/Users";
import Home from "./client/frontend/pages/Home/Home";
import Login from "./client/frontend/pages/login/Login";
import Register from "./client/frontend/pages/register/Register";
import Locationsform from "./client/dashboard/components/locationsform/Locationsform";
import Assessments from "./client/dashboard/components/assessments/Assessments";
import Mainarea from "./client/dashboard/components/mainarea/Mainarea";
import Locations from "./client/dashboard/components/locations/Locations";
import Information from "./client/dashboard/components/information/Information";
import Userslist from "./client/dashboard/components/userslist/Userslist";
import AddUser from "./client/dashboard/components/adduser/AddUser";


function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>

                
                <Route path="login" element={<Login/>} />
                <Route path ="users" element={<Users/>} />
                <Route path ="register" element={<Register/>} />
                <Route path ="locationsform" element={<Locationsform/>} />
                
                {/*start of nested route */}    
                <Route path="app" element={<DashboardHome/>} >
                      <Route path ="mainarea" element ={<Mainarea/>}/>
                      <Route path ="userslist" element ={<Userslist/>}/>
                      <Route path ="assessments" element ={<Assessments/>}/>
                      <Route path ="adduser" element ={<AddUser/>}/>
                      <Route path ="locations" element ={<Locations/>}/>
                      <Route path ="information" element ={<Information/>}/>
                </Route>
                
                {/*end of nested route */}

                
                
                
          
        
      </Routes>
        
    </div>
    
  );
}

export default App;
