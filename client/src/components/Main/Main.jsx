import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppWrapper, DropContainer, RecycleBin, Save, LogOutBtn, Loader } from './style';
import Options from '../../containers/Options';
import AppHeader from '../../components/Header/Header';
import Auth from '../../services/Auth';
import Api from '../../services/Api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recycleBinActive: false,
      saveActive: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.authCheck()
      .then((res) => {
        this.setState({
          isLoading: false,
        });
        if (res.status === 200) {
          this.props.fetchData();
        }
      });
  }

  dragHandler = ({ classList }, value) => {
    if (classList.contains('droppableRemove')) {
      this.setState({
        recycleBinActive: value,
      });
    } else if (classList.contains('droppableSave')) {
      this.setState({
        saveActive: value,
      });
    }
  }

  dragEnter = (event) => {
    this.dragHandler(event.target, true);
  }

  dragOver = (event) => {
    event.preventDefault();
  }

  dragLeave = (event) => {
    this.dragHandler(event.target, false);
  }

  drop = (event) => {
    const { classList } = event.target;
    if (classList.contains('droppableRemove')) {
      this.props.dropRemove();
      this.setState({ recycleBinActive: false });
    } else if (classList.contains('droppableSave')) {
      Api.setData(this.props.counter)
        .catch((error) => {
          console.error(`Request failed: ${error}`);
        });
      this.setState({ saveActive: false });
    }
  }

  handleLogOut = () => {
    Auth.unauthenticateUser();
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
          <AppHeader counter={this.props.counter} handleDragStart={this.dragStart} />
          <Options />
          <DropContainer onDragEnter={this.dragEnter} onDragLeave={this.dragLeave} onDrop={this.drop} onDragOver={this.dragOver} >
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
  authCheck: PropTypes.func.isRequired,
  dropRemove: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
