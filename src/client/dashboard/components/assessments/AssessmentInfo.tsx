import React from "react";
import "./assessmentinfo.scss";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import {DataManager, WebApiAdaptor, Query}from '@syncfusion/ej2-data';
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";


function AssessmentInfo({ formData, setFormData }) {
  const divStyle = {
    margin: 10,
    width: 350,
  };

  const remoteData = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  const dataQuery = new Query()
    .select(["FirstName"])
    .take(10)
    .requiresCount();

  const remoteFields = { value: 'FirstName' };
  

  return (
    <div className="assessment_container">
      <div style={divStyle}>
        <AutoCompleteComponent
          placeholder="Enter Existing Username"
          dataSource={remoteData}
          query={dataQuery}
          fields={remoteFields}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        ></AutoCompleteComponent>

        <Link to="/app/adduser" title="Add New User">
          <BsPlus className="userlist_icon" />
        </Link>
      </div>

      <div style={divStyle}>
        <AutoCompleteComponent
          placeholder="Choose Existing Location"
          dataSource={remoteData}
          query={dataQuery}
          fields={remoteFields}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        ></AutoCompleteComponent>

        <Link to="/app/locationsform" title="Add New Location">
          <BsPlus className="userlist_icon" />
        </Link>
      </div>

      {/*<input
        type="text"
        placeholder="Enter your email"
        // value={formData.email}
        // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  />*/}

      {/*<input
        type="text"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>*/}
    </div>
  );
}

export default AssessmentInfo;
