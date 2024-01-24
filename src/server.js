const express = require('express');
const router = express.Router();
const redis = require('redis');
const { promisify } = require('util');
const path = require('path');

const addPetFormModulePath = path.join(__dirname, 'C:\Users\liad4\OneDrive\שולחן העבודה\מדמח\final project web dev\my-app\src\addpetform.js');
const autoFormModulePath = path.join(__dirname, 'C:\Users\liad4\OneDrive\שולחן העבודה\מדמח\final project web dev\my-app\src\autoform.js');

const Pet = require(addPetFormModulePath);
const Adoption = require(autoFormModulePath);

const client = redis.createClient();

// Convert Redis functions to use Promises
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// Utility function to generate a unique ID for a new pet
function generateUniqueId(pets) {
  return pets.length > 0 ? pets[pets.length - 1].id + 1 : 1;
}

router.get('/pets', async (req, res) => {
  const petsData = await getAsync('pets');
  const pets = petsData ? JSON.parse(petsData) : [];

  res.json(pets);
});

router.get('/pets/:id', async (req, res) => {
  const petId = parseInt(req.params.id);
  const petsData = await getAsync('pets');
  const pets = petsData ? JSON.parse(petsData) : [];

  const pet = pets.find(p => p.id === petId);

  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ error: 'Pet not found' });
  }
});

router.post('/adoptions', async (req, res) => {
  const { id, petId } = req.body;

  if (!id || !petId) {
    return res.status(400).json({ error: 'Both id and petId are required for a new adoption' });
  }

  const petsData = await getAsync('pets');
  const pets = petsData ? JSON.parse(petsData) : [];

  const pet = pets.find(p => p.id === petId);
  if (!pet) {
    return res.status(404).json({ error: 'Pet not found' });
  }

  const adoptionsData = await getAsync('adoptions');
  const adoptions = adoptionsData ? JSON.parse(adoptionsData) : [];

  const newAdoption = new Adoption(id, petId);
  adoptions.push(newAdoption);

  await setAsync('adoptions', JSON.stringify(adoptions));

  res.status(201).json(newAdoption);
});

router.post('/pets', (req, res) => {
  const { name } = req.body;
  const petsData = getAsync('pets');
  const pets = petsData ? JSON.parse(petsData) : [];

  if (!name) {
    return res.status(400).json({ error: 'Name is required for a new pet' });
  }

  const newPet = new Pet(generateUniqueId(pets), name);
  pets.push(newPet);

  res.status(201).json(newPet);
});

module.exports = router;
