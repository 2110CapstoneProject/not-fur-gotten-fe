import React from 'react';
import PetContainer from './PetContainer';
import Header from './Header';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
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
        <Link to="/donation">
          <button className="rehome-button">Rehome Your Pet</button>
        </Link>
      </section>
      <PetContainer pets={data.getAllPets}/>
    </div>
  )
}

export default Home;