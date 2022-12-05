import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./locations.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";
import "jspdf-autotable";

function Locations() {
  const [query, setQuery] = useState("");

  const [locations, setLocation] = useState([]); //setUser to empty array

  //use the useEffect hook to call the getUSers function below

  useEffect(() => {
    getLocations();
  }, []);

  //create function to retrieve data all data from the API

  const getLocations = async () => {
    const response = await axios.get("http://localhost:5000/api/locations");
    setLocation(response.data);
  };

  //download data from table in pdf format

  const downloadData = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table" });
    pdf.save("locationlist.pdf");
  };

  return (
    <div className="locations_container">
      <div className="user_title">
        <div>LOCATIONS</div>

        <div className="user_search">
          <AiOutlineSearch style={{ color: "var(--secondary-dark)" }} />
          <input
            type="text"
            placeholder="Search by Location Name "
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="add_user">
          <Link to="/app/locationsform" title="Add New Location">
            <VscAdd className="userlist_icon" />
          </Link>
          <FiDownload title="Download location list" onClick={downloadData} />
        </div>
      </div>

      <table className="table" id="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>County</th>
            <th>Contact Person</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {locations
            .filter((location) => location.name.includes(query))
            .map((location, index) => (
              <tr key={location._id}>
                <td>{index + 1}</td>
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.county}</td>
                <td>{location.contactperson}</td>
                <td>{location.phonenumber}</td>

                <td>
                  <Link
                    to={`/app/edituser/${location._id}`}
                    title="Edit Location"
                  >
                    <TbEdit />
                  </Link>

                  <Link
                    to={`/app/edituser/${location._id}`}
                    title="Delete user"
                  >
                    <MdDeleteOutline />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Link to="/app/locationsform">
        <button className="btn btn-outline">Add New Location</button>
      </Link>
    </div>
  );
}

export default Locations;
