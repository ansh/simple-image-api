// models/photo.js

const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    url: String,
    description: String,
    favorite: Boolean,
  },
  { timestamps: true } // will automatically at createdAt and updatedAt
);

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
