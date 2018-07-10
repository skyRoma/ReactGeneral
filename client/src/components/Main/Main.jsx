import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppWrapper, DropContainer, RecycleBin, Save, LogOutBtn } from './style';
import Options from '../../containers/Options';
import AppHeader from '../../components/Header/Header';
import handleMouseDown from '../../utils/Drag&Drop';
import Auth from '../../modules/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recycleBinActive: false,
      saveActive: false,
    };
    this.handleMouseDown = handleMouseDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  handleLogOut = () => {
    Auth.deauthenticateUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <AppWrapper>
        <LogOutBtn onClick={this.handleLogOut}>Log out</LogOutBtn>
        <AppHeader handleMouseDown={this.handleMouseDown} counter={this.props.counter} />
        <Options />
        <DropContainer>
          <RecycleBin className="droppableRemove" isActive={this.state.recycleBinActive} />
          <Save className="droppableSave" isActive={this.state.saveActive} />
        </DropContainer>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
