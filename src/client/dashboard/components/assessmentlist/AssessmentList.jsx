import './assessmentlist.scss'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { AiOutlineSearch } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";
import "jspdf-autotable";


function AssessmentList() {

  const [query, setQuery] = useState("");

  const [assessments, setAssessment] = useState([]); //setUser to empty array

  //use the useEffect hook to call the getUSers function below

  useEffect(() => {
    getAssessments();
  }, []);

  //create function to retrieve data all data from the API

  const getAssessments = async () => {
    const response = await axios.get("http://localhost:5000/api/assessments");
    setAssessment(response.data);
  };

  //download data from table in pdf format

  const downloadData = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table" });
    pdf.save("assessmentlist.pdf");
  };

  return (
    <div className="alist_container">
      <div className="user_title">
        <div>ASSESSMENTS</div>

        <div className="user_search">
          <AiOutlineSearch style={{ color: "var(--secondary-dark)" }} />
          <input
            type="text"
            placeholder="Search by Location "
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="add_user">
          <Link to="/vduassessment" title="Carry out new Assessment">
            <VscAdd className="userlist_icon" />
          </Link>
          <FiDownload
            title="Download Full Assessment listing"
            onClick={downloadData}
          />
        </div>
      </div>

      <table className="table" id="table">
        <thead>
          <tr>
            <th>Assessment ID</th>
            <th>Location</th>
            <th>Candidate Name</th>
            <th>Characters Easy To Read</th>
            <th>Size of Characters</th>
            <th>Symbol Easy to Read</th>
            <th>Keyboard Reflective</th>
            <th>Chair Height</th>
            <th>Feet on Floor</th>
          </tr>
        </thead>
        <tbody>
          {assessments
            .filter((assessment) => assessment.location.includes(query))
            .map((assessment, index) => (
              <tr key={assessment._id}>
                <td>{index + 1}</td>
                <td>{assessment.location}</td>
                <td>{assessment.candidate}</td>
                <td>{assessment.characters}</td>
                <td>{assessment.size}</td>
                <td>{assessment.symbols}</td>
                <td>{assessment.reflective}</td>
                <td>{assessment.height}</td>
                <td>{assessment.feet}</td>

                <td>
                  <Link
                    to={`/app/edituser/${assessment._id}`}
                    title="Edit Location"
                  >
                    <TbEdit />
                  </Link>

                  <Link
                    to={`/app/edituser/${assessment._id}`}
                    title="Delete user"
                  >
                    <MdDeleteOutline />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Link to="/vduassessment">
        <button className="btn btn-outline">New Assessment</button>
      </Link>
    </div>
  );
}

export default AssessmentList;
