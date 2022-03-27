import React from 'react';
import '../Styles/DonationFormModal.scss';

const DonationFormModal = () => {
  return (
    <div className="modal">
      <form className="donation-form">
        <h2 className="form-title">Donation Form</h2>
        <section className="owner-info-container">
          <h3 className="form-subtitle">Owner Information</h3>
          <div className="owner-name-container">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
          </div>
          <textarea
            placeholder="Tell potential adopters about yourself..."
            rows="10"
            cols="10"
          />
        </section>
        <section className="pet-info-container">
          <h3 className="form-subtitle">Pet Information</h3>
          <div>
            <input type="text" placeholder="Pet Name"/>
            <input type="text" placeholder="Age"/>
            <input type="text" placeholder="Species"/>
            <input type="text" placeholder="Gender"/>
          </div>
          <textarea
            placeholder="Tell potential adopters about your pet..."
            rows="10"
            cols="10"
          />
          <input type="file" />
        </section>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default DonationFormModal;
