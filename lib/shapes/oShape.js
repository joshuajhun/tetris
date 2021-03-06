var util = require('util');
var EventEmitter = require('events');
util.inherits(oShape, EventEmitter);
var Block = require('../block');

function oShape(board) {
  this.shape = {
    1: new Block(board, 4, 0, "#FFFF00"),
    2: new Block(board, 5, 0, "#FFFF00"),
    3: new Block(board, 4, 1, "#FFFF00"),
    4: new Block(board, 5, 1, "#FFFF00")
  };
  this.rotation  = {
    1:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    },
    2:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    },
    3:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    },
    4:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    }
  };
  this.defaultRotation = 1;
}

module.exports = oShape;
