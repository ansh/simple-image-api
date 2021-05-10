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
  beforeEach((done) => {
    Photo.deleteMany({}, (err) => {});
    done();
  });
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
    let photo;
    it("it should POST one new photo", (done) => {
      chai
        .request(listener)
        .post("/photo")
        .type("form")
        .field("name", "photo")
        .field("description", "a photo of photo")
        .field("favorite", false)
        .attach("url", "test/fb.png", "fb.png")
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          photo = res.body;
          done();
        });
    });
    /*
     * GET /photo/:id
     */
    it("it should GET one photo based on ID of previously uploaded photo", (done) => {
      const id = photo._id;
      chai
        .request(listener)
        .get(`/photo/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("name");
          done();
        });
    });
  });
});
