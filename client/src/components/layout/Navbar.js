import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {logout} from '../../actions/auth'

const Navbar = props => {
  const { isAuthenticated, loading,logout } = props;

  const handleLogout = () => {
    logout();
  }

  return (
    <nav style={{marginBottom: '30px'}}>
      <div className='nav-wrapper teal lighten-2'>
        <Link to='/' className='brand-logo left'>
          {`</>DevConnector`}
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/developers'>Developers</Link>
          </li>
          {isAuthenticated  ? (
            <span>
              <li>
                <Link onClick={handleLogout} to='' >Logout<i className='material-icons right'>exit_to_app</i></Link>
              </li>
            </span>
          ) : (
            <span>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </span>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps,{logout})(Navbar);
