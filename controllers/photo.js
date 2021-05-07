// controllers/photo.js
const Photo = require("../models/photo");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024; // for 1MB

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploadImg = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: maxSize,
  },
}).single("url");

//POST '/photo'
const newPhoto = (req, res, next) => {
  const newPhoto = new Photo({
    name: req.body.name,
    url: req.file.path,
    description: req.body.description,
    favorite: req.body.favorite || false,
  });

  newPhoto.save((err, data) => {
    if (err) return res.json({ Error: err });
    return res.json(data);
  });
};

//GET '/photo'
const getAllPhoto = (req, res, next) => {
  const { page = 1, limit = 10, favStatus, name } = req.query;

  Photo.find({ name: name, favorite: favStatus }, (err, data) => {
    if (err) return res.json({ Error: err });
    Photo.countDocuments({ name: name, favorite: favStatus }, (err, count) => {
      if (err) return res.json({ Error: err });
      return res.json({ data, totalPages: Math.ceil(count / limit), currentPage: page });
    });
  })
    .limit(limit * 1)
    .skip((page - 1) * limit);
};

//GET '/photo/:id'
const getPhotoById = (req, res, next) => {
  let id = req.params.id;

  Photo.findById(id, (err, data) => {
    if (err) return res.json({ Error: err });
    if (!data) return res.json({ message: "Photo doesn't exist" });

    return res.json(data);
  });
};

//PATCH '/photo/:id'
const editPhotoById = (req, res, next) => {
  let id = req.params.id;

  Photo.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
    if (err) return res.json({ Error: err });
    if (!data) return res.json({ message: "Photo doesn't exist" });

    return res.json(data);
  });
};

//POST '/photo/:id'
const favPhotoById = (req, res, next) => {
  let id = req.params.id;

  Photo.findById(id, (err, data) => {
    if (err) return res.json({ Error: err });
    if (!data) return res.json({ message: "Photo doesn't exist" });

    const currentlyFav = data.favorite;
    data.favorite = !currentlyFav;
    data.save((err) => {
      if (err) return res.json({ Error: err });

      return res.json({
        message: `${currentlyFav ? "Removed" : "Added"} photo ${id} ${
          currentlyFav ? "from" : "to"
        } favorites`,
      });
    });
  });
};

module.exports = { newPhoto, uploadImg, getAllPhoto, getPhotoById, editPhotoById, favPhotoById };
