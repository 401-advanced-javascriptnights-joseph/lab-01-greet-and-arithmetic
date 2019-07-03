'use strict';

let arithmetic = module.exports = {};

function check_value(val_one, val_two) { 
  return typeof val_one !== 'number' || typeof val_two !== 'number';
}

arithmetic.add = function(a,b) {
  let sum = 0;
  //if a was an array of numbers
  if( typeof a === 'object') {
    //add everything in array a, and b, if there is a number
    for (let i = 0; i < a.length; i++) {
      sum += a[i] || a[i] + b;
    }
    return sum;
  }
  return check_value(a, b) ? null : a+b;
};

arithmetic.subtract = function (a,b) {
  if( typeof a === 'object') {
    return a.reduce(function(accumulator, value){
      return accumulator - value;
    });
  }
  return check_value(a, b) ? null : a-b;
};

arithmetic.multiply = function(a,b) {
  let product = 1; 
  if( typeof a === 'object') {
    //multiply everything in array a
    for (let i = 0; i < a.length; i++) {
      product *= a[i] || a[i] * b;
    }
    return product;
  }
  return check_value(a, b) ? null : a*b;
};

arithmetic.divide = function(a,b) {
  if( typeof a === 'object') {
    return a.reduce(function(accumulator, value){
      return accumulator / value;
    });
  }
  return check_value(a, b) ? null : a/b;
};
