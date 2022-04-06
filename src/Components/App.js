import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Pet from './Pet';
import PetApplications from './PetApplications';
import Error from './Error';
import '../Styles/App.scss';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="pet/:id" element={<Pet />} />
        <Route path="pet/:id/applications" element={<PetApplications />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
