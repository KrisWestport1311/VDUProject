import React from "react";
import "./stage1.scss";

function Stage1({ formData, setFormData }) {
  return (
    <div className="stage1_container">
      <input
        type="text"
        placeholder="Are the Display Characters easy to read?"
        value={formData.characters}
        onChange={(e) => setFormData({ ...formData, characters: e.target.value })}
      />
      <input
        type="text"
        placeholder="Are the characters of adequate size?"
        value={formData.size}
        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
      />
    </div>
  );
}

export default Stage1;
