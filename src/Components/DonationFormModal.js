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
            <div className="input-label">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="e.g. Samantha" required/>
            </div>
            <div className="input-label">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="e.g. Taylor" required/>
            </div>
          </div>
          <div className="input-label">
            <label htmlFor="ownerStory">Owner Story *Optional*</label>
            <textarea
              id="ownerStory"
              placeholder="Tell potential adopters about yourself..."
              rows="10"
              cols="10"
            />
          </div>
        </section>
        <section className="pet-info-section">
          <h3 className="form-subtitle">Pet Information</h3>
          <div className="pet-details-container">
            <div className="input-label">
              <label htmlFor="lastName">Pet Name</label>
              <input type="text" id="petName" placeholder="e.g. Buster" required/>
            </div>
            <div className="input-label">
              <label htmlFor="age">Age (years)</label>
              <input type="number" id="age" placeholder="e.g. 9" min="0" required/>
            </div>
            <div className="input-label">
              <label htmlFor="type">Type</label>
              <input type="text" id="type" placeholder="e.g. Dog, Cat, etc." required/>
            </div>
            <div className="input-label">
              <label htmlFor="gender">Gender</label>
              {/*REVISIT WITH HOOKS*/}
              <select value="" name="gender" id="gender" required>
                <option value="" disabled>-Please select-</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="input-label">
            <label htmlFor="petDescription">Description</label>
            <textarea
              id="petDescription"
              placeholder="Tell potential adopters about your pet..."
              rows="10"
              cols="10"
              required
            />
          </div>
          <div className="input-label">
            <label htmlFor="imageUpload">Add an image of your pet:</label>
            <input type="file" id="imageUpload" required/>
          </div>
        </section>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default DonationFormModal;
