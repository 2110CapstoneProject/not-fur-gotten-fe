import React from 'react';
import PetContainer from './PetContainer';
import Header from './Header';
import { useQuery, gql } from '@apollo/client';
import '../Styles/Home.scss';

const GET_PETS = gql`
  {
    getAllPets {
      id
      name
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_PETS)

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
        <button className="donate-button">Rehome Your Pet</button>
      </section>
      <PetContainer pets={data.getAllPets}/>
    </div>
  )
}

export default Home;
