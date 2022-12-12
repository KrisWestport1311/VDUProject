import "./login.scss";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin= async (e) =>{
e.preventDefault();
dispatch(loginStart()) //we are not passing anything as we have nothing to pass yet. This from userSlice.js
try{
  const res = await axios.post("http://localhost:5000/api/auth/login", {
    username,
    password,
  });
  dispatch(loginSuccess(res.data));
  navigate("/app/mainarea");
} catch(err){
  dispatch(loginFailure()) //if there is an error
  alert("Wrong details entered. Please try again");
}
  }
  return (
    <div className="login_container">
      <video></video>
      <form className="loginform">
        <span className="logintitle">Login to your account</span>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login_btn" onClick={handleLogin}>
          Log in
        </button>

        <p>Not yet registered?</p>
        <NavLink to="/register" className="login_btn_outline">
          Register
        </NavLink>
      </form>

      <NavLink to="/" className="login_btn login_btn_reg">
        Home
      </NavLink>
    </div>
  );
}
