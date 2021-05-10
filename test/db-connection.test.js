require("dotenv").config();

// require foundations
const mongoose = require("mongoose");
const Photo = require("../models/photo");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Connection to MongoDB", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  describe("Get all photos", () => {
    it("it should GET all the photos", (done) => {
      Photo.find({}, (err, data) => {
        data.should.be.a("array");
      });
      done();
    });
  });

  afterEach(async (done) => {
    mongoose.disconnect();
    done();
  });
});
