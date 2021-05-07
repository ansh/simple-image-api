// routes/photo.js

// setup
const express = require("express"); //import express
const router = express.Router();
const photoController = require("../controllers/photo");

// routes for /photo
router.post("/photo", photoController.uploadImg, photoController.newPhoto);
router.get("/photo", photoController.getAllPhoto);

// routes for /photo/:id
router.get("/photo/:id", photoController.getPhotoById);
router.patch("/photo/:id", photoController.uploadImg, photoController.editPhotoById);
router.post("/photo/:id", photoController.favPhotoById);

module.exports = router; // export to use in server.js
