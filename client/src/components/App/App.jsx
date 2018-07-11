import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from '../../containers/Main';
import AuthWindow from '../../containers/AuthWindow';
import Home from '../../components/Home/Home';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import paths from '../../constants/paths';


const App = () => (
  <React.Fragment>
    <Route exact path="/" render={() => (<Redirect to={paths.home} />)} />
    <Route exact path={paths.home} component={Home} />
    <Route path={paths.login} component={AuthWindow} />
    <Route path={paths.join} component={AuthWindow} />
    <PrivateRoute exact path={paths.counterApi} component={Main} />
  </React.Fragment>
);

export default App;
