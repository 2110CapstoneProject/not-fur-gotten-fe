import React from 'react';
import PetContainer from './PetContainer';
import Header from './Header';
import '../Styles/Home.scss';


const Home = () => {
  return (
    <div>
      <section className='upperSection'>
        <Header />
        <h1>Find a forever home for your best friend</h1>
      </section>
      <PetContainer />
    </div>
  )
}

export default Home;


