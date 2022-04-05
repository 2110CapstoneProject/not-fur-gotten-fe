import React, { useState } from 'react';
import { gql, useMutation  } from '@apollo/client';
import '../Styles/DonationFormModal.scss';

const CREATE_PET = gql`
  mutation createPet(
    $name: String!,
    $age: Int!,
    $gender: String!,
    $description: String!,
    $species: String!,
    $ownerStory: String!,
    $ownerEmail: String!,
    $ownerName: String!
    $image: String!) {
      createPet(input : {
        name: $name,
        age: $age,
        gender: $gender,
        description: $description,
        species: $species,
        ownerStory: $ownerStory,
        ownerEmail: $ownerEmail,
        ownerName: $ownerName,
        image: $image}) {
          pet {
            id,
            name,
            gender,
            description,
            species,
            ownerStory,
            ownerEmail,
            ownerName,
            image
          }
          errors
        }
    }
`

const DonationFormModal = ({ show, onClose, refetch }) => {
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
  const [createPet] = useMutation(CREATE_PET);

  if (!show) {
      return null
  }

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
      .then(response => {
        console.log(response);
        setFormState({
          ...formState,
          imageUrl: response.secure_url
        });
      })
      .catch(err => console.log(err));
  }

  const clearInputs = () => {
    setFormState({
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
    });
  }


  return (
    <div className="modal" onClick={onClose}>
      <form
        className="donation-form"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
            e.preventDefault();
            createPet({ variables: {
              name: formState.petName,
              age: parseInt(formState.age),
              gender: formState.gender,
              description: formState.petDescription,
              species: formState.type,
              ownerStory: formState.ownerStory,
              ownerEmail: formState.ownerEmail,
              ownerName: formState.ownerName,
              image: formState.imageUrl
            }});
            refetch();
            clearInputs();
            onClose();
        }}
      >
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
