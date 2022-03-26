import React from 'react';
import { Route } from 'react-router-dom';
import '../Styles/App.scss';
import Home from './Home';
import Pet from './Pet';
import PetApplications from './PetApplications';
import Error from './Error';



function App() {
  return (
    <div className="App">
      <Home />
      <Pet />
      <PetApplications />
      <Error />
    </div>
  );
}

export default App;
