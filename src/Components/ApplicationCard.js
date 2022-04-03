import React from 'react';
import '../Styles/ApplicationCard.scss';

const ApplicationCard = ({name, email, description}) => {
  return (
    <section className='application-card'>
      <div className='applicant-name'>
        <h3>{name}</h3>
        <p className='email'>{email}</p>
      </div>
      <div className='applicant-details'>
        <p className='intro-label'>Applicant Introduction:</p>
        <p className='intro'>{description}</p>
      </div>
    </section>
  )

}

export default ApplicationCard;