import React from 'react'
import './submit.scss'

function Submit({formData, setFormData}) {
  return (
    <div className='submit_container'>
      <input 
        type="text"
        placeholder="Enter your submit details"
        value={formData.submit1}
        onChange={(e) =>
          setFormData({...formData, submit1: e.target.value})
        }
        />

      <input 
        type="text"
        placeholder="Enter your submit details 2"
        value={formData.submit2}
        onChange={(e) =>
          setFormData({...formData, submit2: e.target.value})
        }
        />
        
      

    </div>
  )
}

export default Submit