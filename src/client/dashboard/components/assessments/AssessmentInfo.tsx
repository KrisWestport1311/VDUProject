import React from "react";
import "./assessmentinfo.scss";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import {DataManager, WebApiAdaptor, Query}from '@syncfusion/ej2-data';


function AssessmentInfo({ formData, setFormData }) {
  const divStyle = {
    margin: 15,
    width: 325,
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
          dataSource={remoteData}
          query={dataQuery}
          fields={remoteFields}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        ></AutoCompleteComponent>
      </div>

      {/*<input
        type="text"
        placeholder="Enter your email"
        // value={formData.email}
        // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  />*/}

      <input
        type="text"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </div>
  );
}

export default AssessmentInfo;
