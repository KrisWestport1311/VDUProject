import React from "react";
import "./assessmenttypes.scss";
import { Link } from "react-router-dom";
import { BiRightArrowCircle } from "react-icons/bi";
import Img1 from "../../../common/images/AImg1.png";
import Img2 from "../../../common/images/AImg5.png";
import Img3 from "../../../common/images/AImg3.png";
import Img4 from "../../../common/images/AImg4.png";

function AssessmentTypes() {
  return (
    <div className="assesm">
      <div className="assesm_container">
        <div className="assesm_card_container">
          <div className="assesm_card">
            <Link to="/vduassessment">
              <img
                src={Img1}
                alt="Assessment 1"
                style={{ width: "200px", height: "auto" }}
              />
              <h4>VDU Assessments</h4>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Use this area to carry out VDU assessments
              </p>

              <BiRightArrowCircle />
            </Link>
          </div>
          <div className="assesm_card">
            <Link to="/vduassessment">
              <img
                src={Img2}
                alt="Assessment 2"
                style={{ width: "200px", height: "auto" }}
              />
              <h4>Assessments #2</h4>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Use this area to carry out an other assessment TBC
              </p>

              <BiRightArrowCircle />
            </Link>
          </div>
          <div className="assesm_card">
            <Link to="/vduassessment">
              <img
                src={Img3}
                alt="Assessment 3"
                style={{ width: "200px", height: "auto" }}
              />
              <h4>Assessments #3</h4>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Use this area to carry out an other assessment TBC
              </p>

              <BiRightArrowCircle />
            </Link>
          </div>
          <div className="assesm_card">
            <Link to="/vduassessment">
              <img
                src={Img4}
                alt="Assessment 4"
                style={{ width: "200px", height: "auto" }}
              />
              <h4>Assessments #4</h4>
              <p style={{ marginTop: 20, marginBottom: 20 }}>
                Use this area to carry out an other assessment TBC
              </p>

              <BiRightArrowCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentTypes;
