var util = require('util');
var EventEmitter = require('events');
util.inherits(Shape, EventEmitter);
var Block = require('./block')
var iShape = require('./shapes/iShape.js')
var _ = require('lodash');

function Shape(piece){
  this.piece = piece
};

Shape.prototype.moveShapeDown = function(){
  _.every(this.piece, function(blocks){
  return  _.every(blocks, function(block){
      return block.moveDown()
    })
 })
}

module.exports = Shape;