//During the test the env variable is set to test
process.env.NODE_ENV = "test";
// db requires
const mongoose = require("mongoose");
const Photo = require("../models/photo");
//Require the dev-dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const listener = require("../index.js");
chai.use(chaiHttp);
let should = chai.should();

describe("Photo", () => {
  /*
   * GET /photo
   */
  describe("GET /photo", () => {
    it("it should GET all the photos", (done) => {
      chai
        .request(listener)
        .get("/photo")
        .end((err, res) => {
          should.exist(res);
          res.should.have.status(200);
          should.exist(res.body);
          // res.body.data.should.be.a("array");
          // res.body.data.length.should.be.eql(0);
          done();
        });
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
      };
      chai
        .request(listener)
        .post("/photo")
        .type("form")
        .attach("url", "test/fb.png")
        .field("name", "photo")
        .field("description", "a photo of photo")
        .field("favorite", false)
        .end((err, res) => {
          res.should.have.status(200);
        });
      done();
    });
  });
});
