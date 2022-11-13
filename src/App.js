import { Routes, Route } from "react-router-dom"

import DashboardHome from "./client/dashboard/pages/Dashboardhome/DashboardHome";
import Users from "./client/dashboard/pages/users/Users";
import Home from "./client/frontend/pages/Home/Home";
import Login from "./client/frontend/pages/login/Login";
import Register from "./client/frontend/pages/register/Register";
import Locationsform from "./client/dashboard/components/locationsform/Locationsform";
import Assessments from "./client/dashboard/components/assessments/Assessments";
import Mainarea from "./client/dashboard/components/mainarea/Mainarea";


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
                      <Route path ="assessments" element ={<Assessments/>}/>
                </Route>
                
                {/*end of nested route */}

                
                
                
          
        
      </Routes>
        
    </div>
    
  );
}

export default App;
