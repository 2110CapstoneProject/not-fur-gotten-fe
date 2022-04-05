import React from 'react';
import Header from './Header';
import '../Styles/Error.scss';

const Error = () => {


  return (
    <section>
      <Header />
      <div className='message-section'>
        <h1 className='error-message'>Error Message TBD</h1>
      </div>
    </section>
  )
}

export default Error;