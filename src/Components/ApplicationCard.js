import React from 'react';
import '../Styles/ApplicationCard.scss';

const ApplicationCard = () => {
  return (
    <section className='application-card'>
      <div className='applicant-name'>
        <h3>Loki Lucifer</h3>
        <p className='email'>catsmeow@gmail.com</p>
      </div>
      <div className='applicant-details'>
        <p className='intro-label'>Applicant Introduction:</p>
        <p className='intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  )

}

export default ApplicationCard;