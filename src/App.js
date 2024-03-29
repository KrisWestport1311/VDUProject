import { Routes, Route } from "react-router-dom";

import DashboardHome from "./client/dashboard/pages/dashboardhome/DashboardHome";
import Users from "./client/dashboard/pages/users/Users";
import Home from "./client/frontend/pages/Home/Home";
import Login from "./client/frontend/pages/login/Login";
import Register from "./client/frontend/pages/register/Register";
import Locationsform from "./client/dashboard/components/locationsform/Locationsform";
import AssessmentTypes from "./client/dashboard/components/assessments/AssessmentTypes";
import Mainarea from "./client/dashboard/components/mainarea/Mainarea";
import Locations from "./client/dashboard/components/locations/Locations";
import Information from "./client/dashboard/components/information/Information";
import Userslist from "./client/dashboard/components/userslist/Userslist";
import AddUser from "./client/dashboard/components/adduser/AddUser";
import EditUser from "./client/dashboard/components/edituser/EditUser";
import EditUser1 from "./client/dashboard/components/edituser/EditUser1";
import VDUAssessmentForm from "./client/dashboard/components/assessments/VDUAssessmentForm";
import ContactFormPage from "./client/frontend/components/ContactForm/ContactFormPage";
import ThankYou from "./client/frontend/pages/ThankYou/ThankYou";
import AssessmentList from "./client/dashboard/components/assessmentlist/AssessmentList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="register" element={<Register />} />
        <Route path="vduassessment" element={<VDUAssessmentForm />} />
        <Route path="assessmentinfo" element={<VDUAssessmentForm />} />

        <Route path="contactus" element={<ContactFormPage />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="edituser1" element={<EditUser1 />} />

        {/*start of nested route */}
        <Route path="app" element={<DashboardHome />}>
          <Route path="mainarea" element={<Mainarea />} />
          <Route path="userslist" element={<Userslist />} />
          <Route path="assessmenttypes" element={<AssessmentTypes />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="edituser/:id" element={<EditUser />} />

          <Route path="locations" element={<Locations />} />
          <Route path="assessmentlist" element={<AssessmentList />} />
          <Route path="information" element={<Information />} />
          <Route path="locationsform" element={<Locationsform />} />
        </Route>

        {/*end of nested route */}
      </Routes>
    </div>
  );
}

export default App;
