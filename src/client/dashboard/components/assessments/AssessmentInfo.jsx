import React from 'react'
import './assessmentinfo.scss'

function AssessmentInfo({formData, setFormData}) {
  return (
    <div className='assessment_container'>
      <input 
        type="text"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) =>
          setFormData({...formData, email: e.target.value})
        }
        />

      <input 
        type="text"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) =>
          setFormData({...formData, password: e.target.value})
        }
        />
        
      

    </div>
  )
}

export default AssessmentInfo