import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import '../Styles/Error.scss';

const Error = ({ error }) => {
  let errorMessage;
  if (error) {
    errorMessage = <p className='error-message'>Something went wrong. Please reload the page and try again.</p>
  } else {
    errorMessage = <p className='error-message'>This page cannot be found.</p>
  }

  return (
    <section>
      <Header />
      <div className='message-section'>
        {errorMessage}
        <Link to='/'>
          <button className='error-button'>Return to Home</button>
        </Link>
      </div>
    </section>
  )
}

export default Error;