import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from '../../containers/Main';
import AuthWindow from '../../components/AuthWindow/AuthWindow';
import Home from '../../components/Home/Home';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const App = () => (
  <React.Fragment>
    <Route exact path="/" render={() => (<Redirect to="/home" />)} />
    <Route exact path="/home" component={Home} />
    <Route path="/login" component={AuthWindow} />
    <Route path="/join" component={AuthWindow} />
    <PrivateRoute exact path="/api/counter" component={Main} />
  </React.Fragment>
);

export default App;
