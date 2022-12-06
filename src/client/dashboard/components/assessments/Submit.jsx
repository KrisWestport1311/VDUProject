import React from 'react'
import './submit.scss'

function Submit({formData, setFormData}) {
  return (
    <div className='submit_container'>
      <input 
        type="text"
        placeholder="Is the seat height adjustable?"
        value={formData.height}
        onChange={(e) =>
          setFormData({...formData, height: e.target.value})
        }
        />

      <input 
        type="text"
        placeholder="Can employee place both feet on floor?"
        value={formData.feet}
        onChange={(e) =>
          setFormData({...formData, feet: e.target.value})
        }
        />
        
      

    </div>
  )
}

export default Submit