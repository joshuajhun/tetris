var util = require('util');
var EventEmitter = require('events');
util.inherits(jShape, EventEmitter);

function jShape(board, x = 0, y = 0) {
  // object of 4 blocks in j, starts flat [][][]
  //                                          []
  this.blocks = {
    1: new Block(board, 1, 0),
    2: new Block(board, 2, 0),
    3: new Block(board, 3, 0),
    4: new Block(board, 3, 1)
  };
};

Block.prototype.defaultPosition = function() {
  return this.blocks = 1
};

module.exports = jShape;