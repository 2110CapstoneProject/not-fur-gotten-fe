import React from 'react';
import PetCard from './PetCard';
import '../Styles/PetContainer.scss';


const PetContainer = ({ pets }) => {
  const petCards = pets.map(pet => {
    return (
      <PetCard
        key={pet.id}
        id={pet.id}
        name={pet.name}
      />
    )
  });

  return (
    <div className="pet-container-section">
      <h2 className="home-page-subheader">Pets Available For Adoption</h2>
      <section className="pet-container">
        {petCards}
      </section>
    </div>
  )
}

export default PetContainer;
