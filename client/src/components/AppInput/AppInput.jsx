import React from 'react';
import PropTypes from 'prop-types';
import { Input, ErrorHint } from './style';

const AppInput = ({ handleInputChange, inputValue, isError }) => (
  <React.Fragment>
    <Input onChange={handleInputChange} value={inputValue} />
    <ErrorHint isError={isError} />
  </React.Fragment>
);

AppInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default AppInput;
