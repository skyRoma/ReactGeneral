import React from 'react';
import PropTypes from 'prop-types';
import { Header, Result } from './style';


const AppHeader = ({ handleMouseDown, counter }) => (
  <Header>
    <h2>Current Counter</h2> <Result className="result" onMouseDown={handleMouseDown}>{counter}</Result>
  </Header>
);

AppHeader.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default AppHeader;
