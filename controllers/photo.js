// controllers/photo.js
const Photo = require("../models/photo");
const multer = require("multer");

//POST '/photo'
const newPhoto = (req, res, next) => {
  Photo.findOne({ name: req.body.name }, (data) => {
    if (data === null) {
      const newPhoto = new Photo({
        name: req.body.name,
        url: req.body.url, //TODO: make this the actual URL
        description: req.body.description,
        favorite: req.body.favorite,
      });

      newPhoto.save((err, data) => {
        if (err) return res.json({ Error: err });
        return res.json(data);
      });
    } else {
      res.json({ message: "Photo already exists" });
    }
  });
};

//GET '/photo'
const getAllPhoto = (req, res, next) => {
  Photo.find({}, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    }
    return res.json(data);
  });
};

//GET '/photo/:id'
const getPhotoById = (req, res, next) => {
  let id = req.params.id;

  Photo.findById(id, (err, data) => {
    if (err | !data) {
      return res.json({ message: "Photo doesn't exist" });
    }
    return res.json(data);
  });
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
