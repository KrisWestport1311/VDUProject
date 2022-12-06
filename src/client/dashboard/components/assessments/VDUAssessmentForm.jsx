import React, {useState} from 'react'
import './vduassessmentform.scss'
import AssessmentInfo from './AssessmentInfo.tsx'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Submit from './Submit'
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";


import axios from "axios";
import { useNavigate } from "react-router-dom";


function VDUAssessmentForm() {

    const [page, setPage] = useState(0);  //variable to keep track of which step of form we are in, starting at 0 or very first step

    const [formData, setFormData] = useState({
        location: "",
        candidate:"",
        characters:"",
        size:"",
        symbols:"",
        reflective:"",
        height:"",
        feet:"",

    });

    const navigate = useNavigate();

    const [isSubmit, setIsSubmit] = useState(false);

    const FormTitles = ["VDU Assessment Info", "Display Screen", "Keyboard", "Work Chair"];

    const PageDisplay = () =>{              //creating a function called PageDisplay and telling it what to do. Calling it inside the body tag below
        if (page === 0) {
            return <AssessmentInfo formData={formData} setFormData={setFormData}/>
        } else if (page ===1) {
            return <Stage1 formData={formData} setFormData={setFormData}/>
        } else if (page ===2){
            return <Stage2 formData={formData} setFormData={setFormData}/>
        }  else {
            return <Submit formData={formData} setFormData={setFormData}/>}
    };

    return (
      <div className="form_area">
        {/*Progress Bar Area*/}

        <div className="progressbar">
          {" "}
          {/*make a change to the size of the status bar depending on page */}
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>

        {/*Form Area*/}

        <div className="form_container">
          <Link to="/app/assessmenttypes" title="Return to Assessments Dashboard">
            <BiHome className="userlist_icon" />
          </Link>
          <div className="form_header">
            <h2>{FormTitles[page]}</h2>
          </div>

          <div className="form_body">{PageDisplay()}</div>

          <div className="form_footer">
            <button
              hidden={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Previous
            </button>
            <button
              className="svg"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  //alert("Form Submitted");
                  //console.log(formData);
                  
                  setIsSubmit(true);
                  axios.post("http://localhost:5000/api/assessments", formData);
                  navigate("/app/assessmentlist");
                } else {
                  setPage((currPage) => currPage + 1);
                }
                //when you click on this svg you want to change the page state to whatever it was before +1 (moving forward to the rhs)
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
}

export default VDUAssessmentForm