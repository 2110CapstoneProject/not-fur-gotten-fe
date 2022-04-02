import React from "react";
import '../Styles/OwnerInformation.scss';

const OwnerInformation = ({
  ownerName,
  ownerStory, 
  setOwnerInfo,
  petName
}) => {

  return (
    <section className="single-pet-details-container-owner">
      <div className='about-owner-nav'>
        <h2 className='pet-owner-nav-link' onClick={() => setOwnerInfo(false)}>Go back to {petName} »</h2>
      </div>
      <div className="owner-page-info">
        <h2 className='single-pet-owner-name'>{ownerName}</h2>
        <p className="owner-story">{ownerStory}</p>
      </div>
    </section>
  )
}
export default OwnerInformation;