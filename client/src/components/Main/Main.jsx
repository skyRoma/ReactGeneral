import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppWrapper, DropContainer, RecycleBin, Save, LogOutBtn, Loader } from './style';
import Options from '../../containers/Options';
import AppHeader from '../../components/Header/Header';
import handleMouseDown from '../../utils/Drag&Drop';
import Auth from '../../services/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recycleBinActive: false,
      saveActive: false,
      isLoading: true,
    };
    this.handleMouseDown = handleMouseDown.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.authCheck()
        .then((res) => {
          this.setState({
            isLoading: false,
          });
          this.props.fetchData();
        });
    }, 2000);
  }

  handleLogOut = () => {
    Auth.deauthenticateUser();
    this.props.history.push('/');
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loader />;
    }
    return (
      this.props.isUserAuthenticated === true ?
        <AppWrapper>
          <LogOutBtn onClick={this.handleLogOut}>Log out</LogOutBtn>
          <AppHeader handleMouseDown={this.handleMouseDown} counter={this.props.counter} />
          <Options />
          <DropContainer>
            <RecycleBin className="droppableRemove" isActive={this.state.recycleBinActive} />
            <Save className="droppableSave" isActive={this.state.saveActive} />
          </DropContainer>
        </AppWrapper>
        :
        <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
