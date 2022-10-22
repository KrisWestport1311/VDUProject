import { Routes, Route } from "react-router-dom"

import DashboardHome from "./client/dashboard/pages/Dashboardhome/DashboardHome";
import Users from "./client/dashboard/pages/users/Users";
import Home from "./client/frontend/pages/Home/Home";
import Login from "./client/frontend/pages/login/Login";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">

                <Route index element={<Home/>}/>

                    
                <Route path="app" element={<DashboardHome/>} />
                <Route path="login" element={<Login/>} />
                <Route path ="users" element={<Users/>} />
          
        </Route>
      </Routes>
        
    </div>
  );
}

export default App;
