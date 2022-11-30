import React from "react";
import "./stage1.scss";

function Stage1({ formData, setFormData }) {
  return (
    <div className="stage1_container">
      <div className="s1_grid_container">
        <div>
          <p>Are the display character easy to read?</p>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label>HTML</label>
          <img
            src="https://www.opticalrooms.ie/wp-content/uploads/2018/09/OnSite-VDU-Screening.jpg"
            alt=""
            width="100px"
          ></img>
        </div>
        <div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label>HTML</label>
        </div>
        </div>

        <div>
          <p>Are the display character of adequate size?</p>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label>HTML</label>
          <img
            src="https://www.opticalrooms.ie/wp-content/uploads/2018/09/OnSite-VDU-Screening.jpg"
            alt=""
            width="100px"
          ></img>
        </div>
        <div className="1">
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label>HTML</label>
        </div>
      </div>

      {/* <input
        type="text"
        placeholder="Enter your second step details"
        value={formData.stage11}
        onChange={(e) => setFormData({ ...formData, stage11: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter your secpond step details 2"
        value={formData.stage12}
        onChange={(e) => setFormData({ ...formData, stage12: e.target.value })}
  /> */}
    </div>
  );
}

export default Stage1;
