import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { pet } = useParams();
  
  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PetDetails;
