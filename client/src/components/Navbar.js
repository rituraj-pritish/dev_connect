import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { isAuthenticated, loading } = props;

  return (
    <nav>
      <div className='nav-wrapper teal lighten-2'>
        <Link to='/' className='brand-logo left'>
          {`</>DevConnector`}
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/users'>Developers</Link>
          </li>
          {isAuthenticated  ? (
            <span>
              <li>
                <a href='/user/logout' ><i className='material-icons'>exit_to_app</i></a>
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

export default connect(mapStateToProps)(Navbar);
