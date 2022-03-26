import React from 'react';
import '../Styles/PetContainer.scss';
import PetCard from './PetCard';


const PetContainer = () => {
  return (
    <div>
      <h2>Pets Available For Adoption</h2>
      <section className='pet-container'>
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </section>
    </div>
  )
}

export default PetContainer;