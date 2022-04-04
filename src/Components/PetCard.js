import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PetCard.scss';

const PetCard = ({ id, name, image }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };
  return (
    <div className="pet-card">
      <Link style={linkStyle} to={`pet/${id}`}>
        <img className="pet-image" src={image} alt="{name}"/>
        <h3 className="pet-card-name">{name}</h3>
      </Link>
    </div>
  )
}

export default PetCard;
