import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Header.scss';

const Header = () => {
  let location = useLocation();
  let goBackLink;
  console.log(location)

  // if (!location) {
  //   goBackLink = null
  // } else {
  //   goBackLink = <Link><p>Back to Home Page</p></Link>
  // }

  return (
    <header className="header">
      <Link to="/">
        <h1>Not Fur-gotten</h1>
      </Link>
      <p>Back to Home Page</p>
    </header>
  )
}

export default Header;