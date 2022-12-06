import React from 'react'

import './stage2.scss'

function Stage2({formData, setFormData}) {
  return (
    <div className="stage2_container">
    

      <input
        type="text"
        placeholder="Are the keyboard symbols easy to read?"
        value={formData.symbols}
        onChange={(e) => setFormData({ ...formData, symbols: e.target.value })}
      />

      <input
        type="text"
        placeholder="Is the keyboard non-reflective?"
        value={formData.reflective}
        onChange={(e) => setFormData({ ...formData, reflective: e.target.value })}
      />
    </div>
  );
}

export default Stage2