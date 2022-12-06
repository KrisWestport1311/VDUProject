import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./edituser.scss";

const EditUser1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, {
        username,
        email,
        password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="eu_container">
      <form className="loginform_1" onSubmit={updateUser}>
        <div className="registertitle">Edit Existing Location</div>
        <div>
          <label>Edit Existing User</label>
        </div>
        <input
          type="text"
          name="username"
          placeholder="Enter new name for user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div>
          <label>Email address</label>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter new e-mail address for user"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <label>Password</label>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="login_btn">Update User</button>
      </form>
    </div>
  );
};
export default EditUser1;
