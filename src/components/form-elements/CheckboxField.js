import React from 'react';
import './InputField.css';

const CheckboxField = ({label, name, onChange}) =>
  <div className="checkbox-field">
  <input
    type="checkbox"
    /*{ value={value} }*/
    name={name}
    id={name}
    onChange={onChange}
  />
  <label htmlFor={name}>{label}</label>
  </div>;
  
  export default CheckboxField;
