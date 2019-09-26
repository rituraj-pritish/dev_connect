import React from 'react';

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper teal lighten-2'>
        <Link to='/' class='brand-logo left'>
          {`</>DevConnector`}
        </Link>
        <ul id='nav-mobile' class='right'>
          <li>
            <Link to='/users'>Developers</Link>
          </li>
          <li>
            <Link to='/user/register'>Register</Link>
          </li>
          <li>
            <Link to='/user/login'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
