import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Developers from './components/Developers';
import Landing from './components/Landing';
import CustomAlert from './components/CustomAlert';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import { fetchUser } from './actions/auth';

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
