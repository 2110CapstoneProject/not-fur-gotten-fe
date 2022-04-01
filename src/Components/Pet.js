import React from 'react';
import '../Styles/Pet.scss';
import Header from './Header';


const Pet = () => {
  return (
    <div className='pet-page-holder'>
      <Header />
      <div className='pet-card-container'>
        <section className="single-pet-details-container">
          <div className='about-owner-nav'>
            <h2>Read More About the Owner >></h2>
          </div>
          <div className='middle-o-card-container'>
            <div className='pet-details'>
              <div className='light-pet-details'>
                <h2 className='single-pet-name'>Stewart</h2>
                <p className='single-pet-age'>9 years old</p>
                <p className='single-pet-gender'>Female</p>
                <p className='single-pet-type'>French Bull Dog</p>
              </div>
              <div className='single-pet-description'>
                <p>Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                Hi, I'm Stewy! I'm so happy to see you! I really like warm sweaters and belly rubs!
                </p>
              </div>
            </div>
            <div className='pet-image'>
              <img src="https://static.inspiremore.com/wp-content/uploads/2019/05/30133841/adorable-senior-dogs-7.jpg"/>
            </div>
          </div>
          <div className='button-container'>
            <button className='view-app-button'>View Applications</button>
            <button className='submit-app-button'>Submit Application</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Pet;