import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApplicationFormModal from './ApplicationFormModal';
import '../Styles/PetInformation.scss';

const PetInformation = ({
  id,
  name,
  gender,
  species,
  description,
  age,
  image,
  setOwnerInfo,
  refetch
}) => {

  const [show, setShow] = useState(false)

  return (
    <section className="single-pet-details-container">
      <div className='about-owner-nav'>
        <h2 className='pet-owner-nav-link' onClick={() => setOwnerInfo(true)}>Read More About the Owner »</h2>
      </div>
      <div className='middle-o-card-container'>
        <div className='pet-details'>
          <div className='light-pet-details'>
            <h2 className='single-pet-owner-name'>{name}</h2>
            <p className='single-pet-age'>Age: {age} years old</p>
            <p className='single-pet-gender'>Gender: {gender}</p>
            <p className='single-pet-type'>Animal Type: {species}</p>
            <label className='description-label'>Description:</label>
          </div>
          <div className='single-pet-description'>
            <p>{description}</p>
          </div>
        </div>
        <div className='pet-image'>
          <img src={image} alt={name}/>
        </div>
      </div>
      <div className='button-container'>
        <Link to={`/pet/${id}/applications`}>
          <button className='view-app-button'>View Applications</button>
        </Link>
        <button
          onClick={() => setShow(true)}
          className='submit-app-button'>Application to Adopt
        </button>
        <ApplicationFormModal
          petId={id}
          petName={name}
          show={show}
          onClose={() => setShow(false)}
          refetch={refetch}
        />
      </div>
    </section>
  )
}
export default PetInformation;
