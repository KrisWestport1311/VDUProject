import React from 'react'

import './stage2.scss'

function Stage2({formData, setFormData}) {
  return (
    <div className="stage2_container">
    

      <input
        type="text"
        placeholder="Enter your third step details"
        value={formData.stage21}
        onChange={(e) => setFormData({ ...formData, stage21: e.target.value })}
      />

      <input
        type="text"
        placeholder="Enter your third step details 2"
        value={formData.stage22}
        onChange={(e) => setFormData({ ...formData, stage22: e.target.value })}
      />
    </div>
  );
}

export default Stage2