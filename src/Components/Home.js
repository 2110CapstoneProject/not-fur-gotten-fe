import React from 'react';
import '../Styles/Home.scss';
import PetContainer from './PetContainer';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <section className='upperSection'>
        <div>
          <Header />
        </div>
        <h1>Find a forever home for your best friend</h1>
      </section>
      <PetContainer />
    </div>
  )
}

export default Home;


