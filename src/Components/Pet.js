import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Header from './Header';
import OwnerInformation from './OwnerInformation';
import PetInformation from './PetInformation';
import '../Styles/Pet.scss';


const GET_SINGLE_PET = gql`
query getPetById($id: ID!) {
  getPetById(id: $id)
  {
    id
    name
    age
    gender
    description
    species
    ownerStory
    ownerEmail
    ownerName
    image
    applications {
      name
      email
      description
    }
  }
}
`

const Pet = () => {
  const [showOwnerInfo, setOwnerInfo] = useState(false);

  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_PET, {variables: {id}})

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  let currentView;
  if (showOwnerInfo) {
    currentView = (
      <OwnerInformation
        ownerName={data.getPetById.ownerName}
        ownerStory={data.getPetById.ownerStory}
        setOwnerInfo={setOwnerInfo}
        petName={data.getPetById.name}
      />)
  } else {
    currentView = (
      <PetInformation
        id ={data.getPetById.id}
        name={data.getPetById.name}
        age={data.getPetById.age}
        gender={data.getPetById.gender}
        species={data.getPetById.species}
        description={data.getPetById.description}
        image={data.getPetById.image}
        applications={data.getPetById.applications}
        setOwnerInfo={setOwnerInfo}
      />)
  }

  return (
    <div className='pet-page-holder'>
      <Header id={id}/>
      <div className='pet-card-container'>
        {currentView}
      </div>
    </div>
  )
}

export default Pet;
