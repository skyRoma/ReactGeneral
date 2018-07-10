import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppWrapper, DropContainer, RecycleBin, Save } from './style';
import Options from '../../containers/Options';
import AppHeader from '../../components/Header/Header';
import handleMouseDown from '../../utils/Drag&Drop';

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

  render() {
    return (
      <AppWrapper>
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
  dropRemove: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default App;
