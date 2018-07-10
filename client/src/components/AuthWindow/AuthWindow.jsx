import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserImg, SignView, Input, LoginBtn, ErrorMsg, AuthQuestion, AuthLink } from './style';
import Auth from '../../modules/Auth';


class AuthWindow extends Component {
  state = {
    errors: {},
    redirectToReferrer: false,
    user: {
      email: '',
      password: '',
    },
    successMessage: null,
  };

  componentDidMount = () => {
    const storedMessage = localStorage.getItem('successMessage');
    if (storedMessage) {
      localStorage.removeItem('successMessage');
    }
    this.setState({
      successMessage: storedMessage,
    });
  }

  processFormLogin = async () => {
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    const response = await fetch('/auth/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const body = await response.json();

    if (response.status === 200) {
      this.setState({
        errors: {},
      });

      Auth.authenticateUser(body.token);
      this.setState({ redirectToReferrer: true });
    } else {
      const errors = body.errors ? body.errors : {};
      errors.summary = body.message;

      this.setState({
        errors,
      });
    }
  }

  processFormSignUp = async () => {
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    const response = await fetch('/auth/signup', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const body = await response.json();

    if (response.status === 200) {
      this.setState({
        errors: {},
      });

      localStorage.setItem('successMessage', body.message);
      this.props.history.push('/login');
    } else {
      const errors = body.errors ? body.errors : {};
      errors.summary = body.message;

      this.setState({
        errors,
      });
    }
  }

  changeUser = (event) => {
    const field = event.target.name;
    const { user } = this.state;
    user[field] = event.target.value;
    this.setState({
      user,
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { pathname } = this.props.location;
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from.pathname} />;
    }

    return (
      <SignView>
        <UserImg userRole={pathname === '/login' ? 'user' : 'foreign'} />
        {this.state.successMessage && <p className="success-message">{this.state.successMessage}</p>}
        <ErrorMsg isError={this.state.errors.summary} />
        <Input name="email" placeholder="enter your email" onChange={this.changeUser} />
        <ErrorMsg isError={this.state.errors.email} />
        <Input name="password" type="password" placeholder="enter your password" onChange={this.changeUser} />
        <ErrorMsg isError={this.state.errors.password} />
        {pathname === '/login' ?
          <React.Fragment>
            <LoginBtn onClick={this.processFormLogin}>Sign In</LoginBtn>
            <AuthQuestion>{'Don\'t have an account? '}<AuthLink to="/join">Create one.</AuthLink></AuthQuestion> 
          </React.Fragment>
          :
          <React.Fragment>
            <LoginBtn onClick={this.processFormSignUp}>Sign Up</LoginBtn>
            <AuthQuestion>{'Already have an account? '}<AuthLink to="/login">Log in.</AuthLink></AuthQuestion> 
          </React.Fragment>
        }
      </SignView>
    );
  }
}

AuthWindow.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AuthWindow;
