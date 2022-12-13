import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./userslist.scss";
import { VscAdd } from "react-icons/vsc";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";
import "jspdf-autotable";

function Userslist() {
  const [query, setQuery] = useState("");

  const [users, setUser] = useState([]); //setUser to empty array

  //use the useEffect hook to call the getUsers function below

  useEffect(() => {
    getUsers();
  }, []);

  //create function to retrieve data all data from the API

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setUser(response.data);
  };

  //download data from table in pdf format

   const downloadData = () => {
     const pdf = new jsPDF();
     pdf.autoTable({ html: "#table" });
     pdf.save("userlist.pdf");
   };

  return (
    <div className="users_container">
      <div className="user_title">
        <div>USERLIST</div>

        <div className="user_search">
          <AiOutlineSearch style={{ color: "var(--secondary-dark)" }} />
          <input
            type="text"
            placeholder="Search by User Name"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="add_user">
          <Link to="/app/adduser" title="Add New User">
            <VscAdd className="userlist_icon" />
          </Link>
          <FiDownload title="Download candidate list" onClick={downloadData} />
        </div>
      </div>

      <table className="table" id="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.username.includes(query))
            .map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <td>
                  <Link to={`/app/edituser/${user._id}`} title="Edit user">
                    <TbEdit />
                  </Link>
                  <Link to={`/app/edituser/${user._id}`} title="Delete user">
                    <MdDeleteOutline />
                  </Link>
                  
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Link to="/app/adduser">
        <button className="btn btn-outline">Add New User</button>
      </Link>
    </div>
  );
}

export default Userslist;
