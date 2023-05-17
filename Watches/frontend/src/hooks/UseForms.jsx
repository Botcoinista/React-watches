import React from 'react'

const UseForms = (formData, setFormData) => {


    const handleChange = (e) => {
        e.preventDefault()
    
        setFormData({
          ...formData,
          [e.target.name]: e.target.value    
        })
      }

  return {
    formData,
    handleChange
  }
}

export default UseForms