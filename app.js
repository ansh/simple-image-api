// index.js

require("dotenv").config();

// Express setup
const express = require("express");
const router = require("./routes/photo");
const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads
app.use("/", router); // to use routes
app.use("/uploads", express.static("./uploads")); // to be able to access the uploads

// MongoDB setup
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URI, // should generally be in an .env file
  {
    ignoreUndefined: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    server: {
      socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
    },
    replset: {
      socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
    },
  },
  (err) => {
    if (err) return console.log("Error: ", err);
    console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);

module.exports = app;
