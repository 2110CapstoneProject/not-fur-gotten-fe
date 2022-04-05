import React from 'react';
import Header from './Header';
import ApplicationContainer from './ApplicationsContainer';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import '../Styles/PetApplications.scss';


const GET_PET_APPLICATION = gql`
query getPetById($id: ID!) {
  getPetById(id: $id) 
  {
    name
    applications {
      name
      email
      description
    }
  }
}
`

const PetApplications = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_PET_APPLICATION, {variables: {id}})


  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <section>
      <Header id={id}/>
      <h2 className='application-title'>Applications for {data.getPetById.name}</h2>
      <ApplicationContainer apps={data.getPetById} />
    </section>
  )
}

export default PetApplications;