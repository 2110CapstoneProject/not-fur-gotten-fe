import React, {useState} from 'react';
import { gql, useMutation  } from '@apollo/client';
import '../Styles/ApplicationFormModal.scss';

const CREATE_APPLICATION = gql`
    mutation createApplication(
        $name: String!,
        $email: String!,
        $description: String!,
        $petId: Int!) {
            createApplication(input : {
                name: $name,
                email: $email,
                description: $description,
                petId: $petId}) {
                    application {
                        id
                        name
                        email
                        description
                        petId
                    }
                    errors
                }
            }
`

const ApplicationFormModal = ({ show, onClose, petName, petId, refetch }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        description: ''
    })

    const [createApplication] = useMutation(CREATE_APPLICATION)

    if (!show) {
        return null
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

    const makeIdInt = parseInt(petId)

    return (
        <div className='modal' onClick={onClose}>
            <form
                className='application-form'
                onClick={(e) => e.stopPropagation()}
                onSubmit={(e) => {
                    e.preventDefault();
                    createApplication({ variables: { petId: makeIdInt, name: formState.name, email: formState.email, description: formState.description }});
                    refetch();
                    clearInputs();
                    onClose();
                }}
            >
                <h2 className='form-title'>Application Form for {petName}</h2>
                <section className='applicant-info-container'>
                    <h3 className='form-subtitle'>Contact Information</h3>
                    <div className= 'applicant-form-container'>
                        <div className='name-email-container'>
                            <div className='input-label'>
                                <label htmlFor='name'>Full Name</label>
                                <input
                                    type='text'
                                    value={formState.name}
                                    id='name'
                                    placeholder='e.g. George Smith'
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            name: e.target.value
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className='input-label'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='text'
                                    value={formState.email}
                                    id='email'
                                    placeholder='e.g. georgesmith@gmail.com'
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            email: e.target.value
                                        })
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className='input-label'>
                            <label htmlFor='applicantDesription'>Tell the owner what makes you the best fit for their pet:</label>
                            <textarea
                                id='applicantDescription'
                                value={formState.description}
                                placeholder='I am the best fit because...'
                                rows="10"
                                cols="10"
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        description: e.target.value
                                    })
                                }
                                required
                            />
                        </div>
                    </div>
                </section>
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default ApplicationFormModal;
