import { Routes, Route } from "react-router-dom"

import DashboardHome from "./client/dashboard/pages/home/DashboardHome";
import Login from "./client/frontend/pages/login/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardHome/>} />    
        <Route path="login" element={<Login/>} />

      </Routes>
        
    </div>
  );
}

export default App;
