import React from 'react'
import './stage1.scss'

function Stage1({formData, setFormData}) {
  return (
     <div className='stage1_container'>
      <input 
        type="text"
        placeholder="Enter your second step details"
        value={formData.stage11}
        onChange={(e) =>
          setFormData({...formData, stage11: e.target.value})
        }
        />

      <input 
        type="text"
        placeholder="Enter your secpond step details 2"
        value={formData.stage12}
        onChange={(e) =>
          setFormData({...formData, stage12: e.target.value})
        }
        />
        
      

    </div>
  )
}

export default Stage1