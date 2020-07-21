
var assert = require('assert');
var multiply = require('../index');


describe("multiply", function() {

  it("Перемножает аргументы", function() {
    assert.equal(multiply.multiply(2, 3), 6);
  });

});