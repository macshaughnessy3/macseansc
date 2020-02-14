import React from 'react';
import './InputField.css';

const SelectField = ({ label, name, options, onChange, value }) => 
  <div className="input-field">
    <label
      className="input-field__label"
      htmlFor={name}
    >
      {label}
    </label>
    <select
      className="input-field__text-input"
      name={name}
      id={name}
      onChange={onChange}
      value={value}
    >
      {options.map(option =>
        <option
          value={option.value}
          key={option.label}
        >
          {option.label}
        </option>
      )}
    </select>
  </div>;

export default SelectField;
