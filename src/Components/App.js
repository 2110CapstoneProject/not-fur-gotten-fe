import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../Styles/App.scss';
import Home from './Home';
import Pet from './Pet';
import PetApplications from './PetApplications';
import Error from './Error';
import ApplicationFormModal from './ApplicationFormModal';
import DonationFormModal from './DonationFormModal';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="pet/:id" element={<Pet />} />
        <Route path="pet/:id/applications" element={<PetApplications />} />
        <Route path='application' element={<ApplicationFormModal />} />
        <Route path='donation' element={<DonationFormModal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

//use params

export default App;
