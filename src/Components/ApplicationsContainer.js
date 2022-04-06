import React from 'react';
import ApplicationCard from './ApplicationCard';
import '../Styles/ApplicationContainer.scss';


const ApplicationContainer = (apps) => {
  let allApplications = apps.apps.applications.map(application => {
    return (
      <ApplicationCard
          key={`${application.email}${Date.now()}`}
          name={application.name}
          email={application.email}
          description={application.description}
      />
    )
  })
  let display = allApplications.length ? allApplications : <p className='no-results'>No applications quite yet.</p>
  return (
    <section className='application-container'>
      {display}
    </section>
  )
}

export default ApplicationContainer;
