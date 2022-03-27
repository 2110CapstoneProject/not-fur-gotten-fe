import React from 'react';
import '../Styles/DonationFormModal.scss';

const DonationFormModal = () => {
  return (
    <div className="modal">
      <form>
        <h2>Donation Form</h2>
        <section>
          <h3>Owner Information</h3>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <textarea />
        </section>
        <section>
          <h3>Pet Information</h3>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <textarea />
          <input type="files" />
        </section>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default DonationFormModal;
