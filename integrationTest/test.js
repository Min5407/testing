var request = require("supertest")
const expect = require('chai').expect;

//    , app = require("../server2.js")
// var assert = require("assert")
var http = require("http");
var chai = require("chai");
var chaiHttp = require("chai-http")
let should = chai.should();

chai.use(chaiHttp)

let app = "http://localhost:3000"
describe('server test', () => {
   it("get item", function () {
      request(app)
         .get('/lists')
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("array");

         })

   })

   it("add1", function () {
      chai.request(app)
         .post('/add')
         .send({ id: 206, name: "asd", description: "asd", price: 123, units: 112 })
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("boolean")
            // expect(response.statusCode).to.equal(201);


            // res.should.have.status(200);
            // res.should.have.status(200);
            // console.log(res.body);
         })
   })

   it("add2", function () {
      chai.request(app)
         .post('/add')
         .send({ id: 205, name: "bsd", description: "bsd", price: 123, units: 1122 })
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("boolean")
            // expect(response.statusCode).to.equal(201);


            // res.should.have.status(200);
            // res.should.have.status(200);
         })
   })

   it("delete1", function () {
      chai.request(app)
         .post('/delete')
         .send({ id: '5d832cc0a89a6b2f4bcbb8d0' })
         .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a("array")
         })

   })
   it("delete2", function () {
      chai.request(app)
         .post('/delete')
         .send({ id: '5d832dfc60964e2f7eedbc90' })
         .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a("array")
         })

   })

   it("update1", () => {
      chai.request(app)
         .post("/update")
         .send({ _id: "5d83319dc29ae83003f560e6", name: "update1", price: 100, description: "update1", units: 100 })
         .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a("boolean")
         })
   })
   it("update2", () => {
      chai.request(app)
         .post("/update")
         .send({ _id: "5d83319dc29ae83003f560e5", name: "update2", price: 100, description: "update2", units: 100 })
         .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a("boolean")
         })
   })

   it("getItem", () => {
      chai.request(app)
         .post("/getItem")
         .send({ _id: "5d83319dc29ae83003f560e5" })
         .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a("array")
         })
   })
})


// describe('server test', () => {
//    before(() => {
//       console.log("before test")
//    })
//    after(() => {
//       console.log("after test")
//    })

//    describe('get item', () => {
//       it("return all items", () => {
//          http.post('http://localhost:3000/getItem', (res) => {
//             assert.equal(response.statusCode, 200);
//             var body = ""
//             response.on("data", (d) => { bdy += d })
//             response.on("end", () => {
//                assert.equal(body, "hello Mocha")
//             })
//          })
//       })
//    })




