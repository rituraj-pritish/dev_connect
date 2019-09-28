import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Landing from './components/pages/Landing';
import CustomAlert from './components/layout/CustomAlert';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import { fetchUser } from './actions/auth';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import AddExperience from './components/profile/AddExperience';
import AddEducation from './components/profile/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';

const App = ({ fetchUser, loading }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) {
    return null;
  }

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profiles' component={Profiles} />
            <Route exact path='/profiles/:id' component={Profile} />
            <Route exact path='/' component={Landing} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute
              exact
              path='/add-experience'
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path='/add-education'
              component={AddEducation}
            />
          </Switch>
        </div>
        <CustomAlert />
      </Fragment>
    </Router>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
