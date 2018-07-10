import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './style';
import AppInput from '../AppInput/AppInput';

class Options extends Component {
  state = {
    addInputValue: '',
    subInputValue: '',
    addError: false,
    subError: false,
    addButtonDisabled: true,
    subButtonDisabled: true,
  }

  handleAddInputChange = (e) => {
    if (!e.target.value.match(/[^0-9]/g)) {
      this.setState({
        addButtonDisabled: false,
        addInputValue: e.target.value,
        addError: false,
      });
    } else {
      this.setState({
        addError: true,
      });
    }
  }

  handleSubInputChange = (e) => {
    if (!e.target.value.match(/[^0-9]/g)) {
      this.setState({
        subButtonDisabled: false,
        subInputValue: e.target.value,
        subError: false,
      });
    } else {
      this.setState({
        subError: true,
      });
    }
  }

  handleAddClick = () => {
    this.props.add(this.state.addInputValue);
    this.setState({
      addInputValue: '',
      addButtonDisabled: true,
      addError: false,
    });
  }

  handleSubClick = () => {
    this.props.substract(this.state.subInputValue);
    this.setState({
      subInputValue: '',
      subButtonDisabled: true,
      subError: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button id="btn1" onClick={this.props.increment}>Increment</Button>
        <Button className="btn2" onClick={this.props.decrement}>Decrement</Button>
        <Button className="btn3" onClick={this.handleAddClick} disabled={this.state.addButtonDisabled}>Add</Button>
        <AppInput handleInputChange={this.handleAddInputChange} inputValue={this.state.addInputValue} isError={this.state.addError} />
        <Button className="btn4" onClick={this.handleSubClick} disabled={this.state.subButtonDisabled}>Substract</Button>
        <AppInput handleInputChange={this.handleSubInputChange} inputValue={this.state.subInputValue} isError={this.state.subError} />
      </React.Fragment>
    );
  }
}

Options.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  substract: PropTypes.func.isRequired,
};

export default Options;
