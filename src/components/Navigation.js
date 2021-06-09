import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


// Diese Datei ist die allte Navigation vom Login. Ggf löschen

const Navigation = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <ul>
      <li><Link to="/Test">Test</Link></li>
      <li><Link to="/admin">Admin</Link></li>
      <li>
        {
          isLoggedIn() ?
          <Link onClick={logout}>Logout</Link> :
          <Link to='logintest'>Login</Link>
        }
      </li>
      {
        !isLoggedIn() &&
        <li><Link to="/signup">Sign up</Link></li>
      }
    </ul>
  )
} 

export default Navigation;