import React from 'react';
import PropTypes from 'prop-types';
import { Header, Result } from './style';


const AppHeader = ({ counter }) => (
  <Header>
    <h2>Current Counter</h2> <Result draggable="true">{counter}</Result>
  </Header>
);

AppHeader.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default AppHeader;
