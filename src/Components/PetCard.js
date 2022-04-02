import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PetCard.scss';

const PetCard = ({ id, name }) => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };
  return (
    <div className="pet-card">
      <Link style={linkStyle} to={`pet/${id}`}>
        <img className="pet-image" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1617&q=80" alt="{name}"/>
        <h3 className="pet-card-name">{name}</h3>
      </Link>
    </div>
  )
}

export default PetCard;
