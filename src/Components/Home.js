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

  const { error, loading, data } = useQuery(GET_PETS)
  console.log('data in home', data)

  return (
    <div>
      <section className='upperSection'>
        <Header />
        <h1>Find a forever home for your best friend</h1>
      </section>
      <PetContainer pets={data}/>
    </div>
  )
}

export default Home;


