// controllers/photo.js

//POST '/photo'
const newPhoto = (req, res, next) => {
  res.json({ message: "POST new photo" }); // dummy function for now
};

//GET '/photo'
const getAllPhoto = (req, res, next) => {
  res.json({ message: "GET all photo" }); // dummy function for now
};

//GET '/photo/:id'
const getPhotoById = (req, res, next) => {
  res.json({ message: "GET one photo" }); // dummy function for now
};

//PATCH '/photo/:id'
const editPhotoById = (req, res, next) => {
  res.json({ message: "PATCH edit photo" }); // dummy function for now
};

//POST '/photo/:id'
const favPhotoById = (req, res, next) => {
  res.json({ message: "POST fav one photo" }); // dummy function for now
};

module.exports = { newPhoto, getAllPhoto, getPhotoById, editPhotoById, favPhotoById };
