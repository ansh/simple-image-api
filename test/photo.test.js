//During the test the env variable is set to test
process.env.NODE_ENV = "test";
// db requires
const mongoose = require("mongoose");
const Photo = require("../models/photo");
//Require the dev-dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = "../app.js";
chai.use(chaiHttp);
let should = chai.should();

// Parent block for Photos
describe("Photos", () => {
  /*
   * GET /photo
   */
  describe("GET /photo", () => {
    it("it should GET all the photos", (done) => {
      chai
        .request(app)
        .get("/photo")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
        });
      done();
    });
  });
  /*
   * POST /photo
   */
  describe("POST /photo", () => {
    it("it should POST one new photo", (done) => {
      const testPhoto = {
        name: "photo",
        description: "photo",
        favorite: false,
        url: "uploads/fb.png",
      };
      chai
        .request(app)
        .post("/photo")
        .send(testPhoto)
        .end((err, res) => {
          res.should.have.status(200);
        });
      done();
    });
  });
});
