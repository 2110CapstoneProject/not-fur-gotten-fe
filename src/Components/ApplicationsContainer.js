import React from 'react';
import ApplicationCard from './ApplicationCard';
import '../Styles/ApplicationContainer.scss';


const ApplicationContainer = (apps) => {
  let allApplications = apps.apps.applications.map(application => {
    return (
      <ApplicationCard
          name={application.name}
          email={application.email}
          description={application.description}
      />
    )
  })
  return(
    <section className='application-container'>
      {allApplications}
    </section>
  )
}

export default ApplicationContainer;
