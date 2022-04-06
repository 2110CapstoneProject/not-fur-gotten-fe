import React from 'react';
import PetCard from './PetCard';
import '../Styles/PetContainer.scss';


const PetContainer = ({ pets }) => {
  let petCards;
  let emptyMessage;

  if(!pets.length){
    emptyMessage = <p className='no-results'>No pets are currently up for adoption.</p>
  } else {
    petCards = pets.map(pet => {
      return (
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          image={pet.image}
        />
      )
    });
  }

  return (
    <div className="pet-container-section">
      <h2 className="home-page-subheader">Pets Available For Adoption</h2>
        {emptyMessage}
      <section className="pet-container">
        {petCards}
      </section>
    </div>
  )
}

export default PetContainer;
