import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
            <li>
              { isLoggedIn && <Link to='/friends'>Friends List</Link> }
            </li>
            <li>
              { isLoggedIn && <Link to='/friendform'>Add A Friend!</Link> }
            </li>
          </ul>
    </nav>
  )
}

export default Navbar
