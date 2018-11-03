import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={ label }>Name</label>
      <input 
        type={ type } 
        name={ name }
        className="form-control form-control-sm" 
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;