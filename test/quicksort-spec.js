var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var quickSort = require('../lib/quicksort.js');

describe('Quick Sort', function () {

    it('should be a function', function () {
      quickSort.should.be.a.function;
    });

    it('Should return false if input is not an array', function () {
      var answer = quickSort(123);
      var answer = quickSort({});
      answer.should.be.false;

    });

    it('should return a sorted array', function () {
      var answer = quickSort([3,2,1]);
      answer.should.eql([1,2,3]);
    });

});