// src/components/PetList.js
import React from 'react';
import DogImage from './dogimage.js'; // Adjust the path accordingly

const PetList = () => {
  const pets = [
    { id: 1, name: 'Fluffy'},
    { id: 2, name: 'Buddy' },
    { id: 3, name: 'Hopper' },
    { id: 4, name: 'jimmy'},
    { id: 5, name: 'bob' },
    { id: 6, name: 'chase' },
    { id: 7, name: 'icy'},
    { id: 8, name: 'Buggy' },
    { id: 9, name: 'hershey' },
  ];

  return (
    <div>
      <h2>Available Pets</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name}
            <DogImage />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
