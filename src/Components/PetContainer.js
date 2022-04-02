import React from 'react';
import PetCard from './PetCard';
import { Link } from 'react-router-dom';
import '../Styles/PetContainer.scss';


const PetContainer = ({ pets }) => {
  const petCards = pets.map(pet => {
    return (
      <Link to={`pet/${pet.id}`} key={pet.id}>
        <PetCard
          id={pet.id}
          name={pet.name}
        />
      </Link>
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
