import React from 'react';
import ApplicationCard from './ApplicationCard';
import '../Styles/ApplicationContainer.scss';

const ApplicationContainer = () => {

  return(
    <section className='application-container'>
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
    </section>
  )
}

export default ApplicationContainer;
