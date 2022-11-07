import React from 'react'
import './forminput.css'

const FormInput = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
  return (
    <div className='form-container'>
        <label>{label}</label>
        <input 
          {...inputProps} 
          onChange={onChange}
        />
    </div>
  )
}

export default FormInput