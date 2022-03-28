import React, {useState} from 'react';
import '../Styles/ApplicationFormModal.scss';

const ApplicationFormModal = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        description: ''
    })

    return (
        <div className='modal'>
            <form className='application-form' onSubmit={(e) => e.preventDefault()}>
                <h2 className='form-title'> Application Form</h2>
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
                                id='applicatDescription'
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