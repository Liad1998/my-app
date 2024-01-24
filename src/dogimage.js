import React, { useEffect, useState } from 'react';

const DogImage = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        if (!response.ok) {
          throw new Error('Failed to fetch dog image');
        }

        const data = await response.json();
        setDogImage(data.message);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={dogImage} alt="Dog" style={{ maxWidth: '100%' }} />
          {/* Remove the incorrect reference to 'response' here */}
        </>
      )}
    </div>
  );
};

export default DogImage;