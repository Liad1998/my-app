// src/addpetform.js
import React, { useState } from 'react';

const AddPetForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddPet = () => {
    // Handle the logic to add the pet
    console.log('Adding pet:', { name, description });
    // Add your logic here, e.g., update state, make an API call, etc.
  };

  return (
    <div>
      <h2>Add a New Pet</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="button" onClick={handleAddPet}>
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
