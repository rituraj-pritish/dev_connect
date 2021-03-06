import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/auth';

const Navbar = props => {
  const { isAuthenticated, logout } = props;

  const handleLogout = () => {
    logout();
  };

  const authenticated = (
    <span>
      <li>
        <Link to='/allposts'>Posts</Link>
      </li>
      <li>
        <Link onClick={handleLogout} to=''>
          Logout<i className='material-icons right'>exit_to_app</i>
        </Link>
      </li>
    </span>
  );

  const notAuthenticated = (
    <span>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </span>
  );

  return (
    <nav style={{ marginBottom: '30px' }}>
      <div className='nav-wrapper teal lighten-2'>
        <Link to='/' className='brand-logo left'>
          {`</>DevConnector`}
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/profiles'>Developers</Link>
          </li>
          {isAuthenticated ? authenticated : notAuthenticated}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
