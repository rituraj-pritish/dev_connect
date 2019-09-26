import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Developers from './components/pages/Developers';
import Landing from './components/pages/Landing';
import CustomAlert from './components/layout/CustomAlert';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import { fetchUser } from './actions/auth';
import CreateProfile from './components/profile/CreateProfile';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/users' component={Developers} />
            <Route exact path='/' component={Landing} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
          </Switch>
        </div>
        <CustomAlert />
      </Fragment>
    </Router>
  );
};

export default connect(
  null,
  { fetchUser }
)(App);
