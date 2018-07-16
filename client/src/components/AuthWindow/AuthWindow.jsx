import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserImg, SignView, LoginBtn, AuthQuestion, AuthLink } from './style';
import { ErrorMsg } from '../AuthInput/style';
import Auth from '../../services/Auth';
import AuthInput from '../../components/AuthInput/AuthInput';
import userRoles from '../../constants/userRoles';
import paths from '../../constants/paths';


class AuthWindow extends Component {
  state = {
    errors: {},
    redirectToReferrer: false,
    user: {
      email: '',
      password: '',
    },
    successMessage: '',
  };

  componentDidMount = () => {
    const storedMessage = this.props.successMessage;
    if (storedMessage) {
      this.props.removeSucessMsg();
    }
    this.setState({
      successMessage: storedMessage,
    });
  }

  processFormLogin = async () => {
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;


    this.props.fetchSignIn(formData)
      .then(async (res) => {
        if (res.status !== 200) {
          throw await res.json();
        }
        return res.json();
      })
      .then((data) => {
        Auth.authenticateUser(data.token);
        this.setState({
          errors: {},
          redirectToReferrer: true,
        });
      })
      .catch((errorData) => {
        const errors = errorData.errors ? errorData.errors : {};
        errors.summary = errorData.message;

        this.setState({
          errors,
        });
      });
  }

  processFormSignUp = async () => {
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    this.props.fetchSignUp(formData)
      .then(async (res) => {
        if (res.status !== 200) {
          throw await res.json();
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          errors: {},
        });
        this.props.addSucessMsg(data.message);
        this.props.history.push(paths.login);
      })
      .catch((errorData) => {
        const errors = errorData.errors ? errorData.errors : {};
        errors.summary = errorData.message;

        this.setState({
          errors,
        });
      });
  }

  changeUser = (event) => {
    const { name, value } = event.target;
    const { user } = this.state;
    user[name] = value;
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
    const { summary, email, password } = this.state.errors;
    return (
      <SignView>
        <UserImg userRole={pathname === paths.login ? userRoles.user : userRoles.foreign} />
        {this.state.successMessage && <p className="success-message">{this.state.successMessage}</p>}
        <ErrorMsg isError={summary} />
        <AuthInput name="email" placeholder="enter your email" handleChange={this.changeUser} isError={email} />
        <AuthInput name="password" type="password" placeholder="enter your password" handleChange={this.changeUser} isError={password} />
        {pathname === paths.login ?
          <React.Fragment>
            <LoginBtn onClick={this.processFormLogin}>Sign In</LoginBtn>
            <AuthQuestion>{'Don\'t have an account? '}<AuthLink to={paths.join}>Create one.</AuthLink></AuthQuestion>
          </React.Fragment>
          :
          <React.Fragment>
            <LoginBtn onClick={this.processFormSignUp}>Sign Up</LoginBtn>
            <AuthQuestion>{'Already have an account? '}<AuthLink to={paths.login}>Log in.</AuthLink></AuthQuestion>
          </React.Fragment>
        }
      </SignView>
    );
  }
}

AuthWindow.propTypes = {
  addSucessMsg: PropTypes.func.isRequired,
  removeSucessMsg: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default AuthWindow;
