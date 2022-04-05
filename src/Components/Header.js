import React from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../Not_Furgotten_logo.png';
import '../Styles/Header.scss';

const Header = ({id, petName}) => {
  let { pathname } = useLocation();
  let navLink;
  
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  if (pathname === `/pet/${id}`) {
    navLink = <Link style={linkStyle} to='/'>Back to Home »</Link>
  } else if (pathname === `/pet/${id}/applications`){
    navLink = <Link style={linkStyle} to={`/pet/${id}`}>Back to {petName} »</Link>
  } else {
    navLink = null;
  }
 
  return (
    <header className="header">
      <Link to="/" style={linkStyle}>
        <img src={logo} alt="Not Furgotten Logo" className="logo" />
      </Link>
      {navLink}
    </header>
  )
}

export default Header;