const express = require("express");
const router = require("./routes/photo");
const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

app.use("/", router); // to use routes

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://user:kKDV911gEWlzNCiI@cluster0.5eeco.mongodb.net/myFirstDatabase", // should generally be in an .env file
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) return console.log("Error: ", err);
    console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
