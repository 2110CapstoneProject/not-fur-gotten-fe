import React, { useState } from 'react';
import '../Styles/DonationFormModal.scss';

const DonationFormModal = () => {
  const [file, setFile] = useState(null);
  const [formState, setFormState] = useState({
    ownerName: '',
    ownerEmail: '',
    ownerStory: '',
    petName: '',
    age: '',
    type: '',
    gender: '',
    petDescription: '',
    imageName: '',
    imageUrl: ''
  })

  const handlePic = (e) => {
    setFormState({
      ...formState,
      imageName: e.target.value
    });
    const picture = e.target.files[0];
    setFile(picture);
  }

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'b3somrig');
    fetch('https://api.cloudinary.com/v1_1/dzfyvxcwi/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(response => console.log(response))
  }


  return (
    <div className="modal">
      <form className="donation-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="form-title">Donation Form</h2>
        <section className="owner-info-container">
          <h3 className="form-subtitle">Owner Information</h3>
          <div className="owner-name-container">
            <div className="input-label">
              <label htmlFor="ownerName">Full Name</label>
              <input
                type="text"
                value={formState.fullName}
                id="ownerName"
                placeholder="e.g. Samantha Taylor"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    ownerName: e.target.value
                  })
                }
                required
              />
            </div>
            <div className="input-label">
              <label htmlFor="ownerEmail">Email</label>
              <input
                type="text"
                value={formState.ownerEmail}
                id="ownerEmail"
                placeholder="e.g. samantha.taylor@gmail.com"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    ownerEmail: e.target.value
                  })
                }
                required
              />
            </div>
          </div>
          <div className="input-label">
            <label htmlFor="ownerStory">Owner Story *Optional*</label>
            <textarea
              id="ownerStory"
              value={formState.ownerStory}
              placeholder="Tell potential adopters about yourself..."
              rows="10"
              cols="10"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  ownerStory: e.target.value
                })
              }
            />
          </div>
        </section>
        <section className="pet-info-section">
          <h3 className="form-subtitle">Pet Information</h3>
          <div className="pet-details-container">
            <div className="input-label">
              <label htmlFor="lastName">Pet Name</label>
              <input
                type="text"
                value={formState.petName}
                id="petName"
                placeholder="e.g. Buster"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    petName: e.target.value
                  })
                }
                required
              />
            </div>
            <div className="input-label">
              <label htmlFor="age">Age (years)</label>
              <input
                type="number"
                value={formState.age}
                id="age"
                placeholder="e.g. 9"
                min="0"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    age: e.target.value
                  })
                }
                required
              />
            </div>
            <div className="input-label">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                value={formState.type}
                id="type"
                placeholder="e.g. Dog, Cat, etc."
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    type: e.target.value
                  })
                }
                required
              />
            </div>
            <div className="input-label">
              <label htmlFor="gender">Gender</label>
              <select
                value={formState.gender}
                name="gender"
                id="gender"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    gender: e.target.value
                  })
                }
                required
              >
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
              value={formState.petDescription}
              placeholder="Tell potential adopters about your pet..."
              rows="10"
              cols="10"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  petDescription: e.target.value
                })
              }
              required
            />
          </div>
          <div className="input-label">
            <label htmlFor="imageUpload">Add an image of your pet:</label>
            <input
              data-testid="image-upload"
              type="file"
              accept="image/png, image/jpeg"
              value={formState.imageName}
              id="imageUpload"
              onChange={handlePic}
              required
            />
            <button className="upload-button" type="button" onClick={uploadImage}>Upload</button>
          </div>
        </section>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default DonationFormModal;
