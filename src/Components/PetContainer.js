import React from 'react';
import PetCard from './PetCard';
import '../Styles/PetContainer.scss';


const PetContainer = ({pets}) => {
  console.log(pets)
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