import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

export default class TextInputField extends React.Component {
  state = {
    a: 'b',
  };
  componentDidUpdate(props, state) {
    console.log('props ->', props);
    console.log('state ->', state);
  }
  
  render() {
    const {
      label,
      name,
      onChange,
      onBlur,
      value,
      required,
      type = 'text',
    } = this.props;
    return (
      <div className="input-field">
        <label
          className="input-field__label"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          type={type}
          className="input-field__text-input"
          required={required}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
}

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};
