import React from 'react';
import Header from './Header';
import ApplicationContainer from './ApplicationsContainer';
import '../Styles/PetApplications.scss';

const PetApplications = () => {
  return (
    <section>
      <Header />
      <h2 className='application-title'>Applications for *PetName*</h2>
      <ApplicationContainer />
    </section>
  )
}

export default PetApplications;