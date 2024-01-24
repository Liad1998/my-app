// src/App.js
import React from 'react';
import PetList from './petlist.js';  // Use forward slashes for the path
import Petdetailes from './petdetailes.js';  // Use forward slashes for the path
import AutoForm from './autoform.js';  // Use forward slashes for the path
import AddPetForm from './addpetform.js';  // Use forward slashes for the path
import DogImage from './dogimage.js'; // Adjust the path accordingly
// Use forward slashes for the path
function App() {
  return (
    <div className="App">
      <h1>Pet Adoption App</h1>
      <PetList />
    </div>
  );
}

export default App;
