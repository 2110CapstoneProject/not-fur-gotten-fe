import React from 'react';
import '../Styles/Pet.scss';
import Header from './Header';

//Posting happens before querying
//Then query
//Then data flows down from the query.

//This is pulling the information posted from the 
//On click of card, 
//Pet ID from pet card
//Pulls data to this component?
//Or graphQL query can pull the info we need into this component?

const Pet = () => {
  return (
    <div className='pet-page-holder'>
      <Header />
      <div className='pet-card-container'>
        <section className="pet-details-container">
          <div className='about-owner-nav'>
            <h2>Read More About the Owner</h2>
          </div>
          <div className='middle-o-card-container'>
            <div className='pet-details'>
              <h2>Stewart</h2>
              <h4>9 years old</h4>
              <h4>French Bull Dog</h4>
              <p>Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!</p>
            </div>
            <div className='pet-image'>Image of the Pet</div>
          </div>
          <div>
            <button className='view-app-button'>View Applications</button>
            <button className='submit-app-button'>Submit Applications</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Pet;