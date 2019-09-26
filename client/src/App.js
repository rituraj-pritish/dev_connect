import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css'
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Developers from './components/Developers';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Fragment >
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/user/register' component={Register} />
            <Route path='/user/login' component={Login} />
            <Route path='/users' component={Developers} />
            <Route path='/' component={Landing} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
