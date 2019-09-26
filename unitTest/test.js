var assert = require('assert'); //link in assertion library
var linearPoint = require("../server/routes/linearPoint.js")
describe('Tests for function one', () => {
   describe('Test Case 1 #One()', () => {
      it('should return 6 ', () => {
         assert.equal(linearPoint(2, 1, 4), 6)
      });
   });
   describe('Test Case #two()', () => {
      it('should return 4', () => {
         assert.equal(linearPoint(2, 0, 4), 4)
      });
   });
   describe('Test Case #three()', () => {
      it('should return 2', () => {
         assert.equal(linearPoint(2, -1, 4), 2)
      });
   });
});