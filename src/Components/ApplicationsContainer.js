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
  let display = allApplications.length ? allApplications : <p className='no-applications-section'>No applications quite yet.</p>
  return (
    <section className='application-container'>
      {display}
    </section>
  )
}

export default ApplicationContainer;
