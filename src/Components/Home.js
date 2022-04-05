import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import PetContainer from './PetContainer';
import Header from './Header';
import DonationFormModal from './DonationFormModal';
import '../Styles/Home.scss';

const GET_PETS = gql`
  query getAllPets {
    getAllPets {
      id
      name
      image
    }
  }
`

const Home = () => {
  const [show, setShow] = useState(false)
  const { loading, error, data } = useQuery(GET_PETS);
  

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="page-view">
      <Header />
      <section className='hero-banner'>
        <h2 className="hero-banner-text">Find a forever home for your best friend.</h2>
        <button onClick={() => setShow(true)} className="rehome-button">Rehome Your Pet</button>
      </section>
      <PetContainer pets={data.getAllPets}/>
      <DonationFormModal
        show={show}
        onClose={() => setShow(false)}
      />
    </div>
  )
}

export default Home;
