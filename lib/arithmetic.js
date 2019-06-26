'use strict';

let arithmetic = module.exports = {};

function check_value(val_one, val_two) { 
  return typeof val_one !== 'number' || typeof val_two !== 'number';
}

arithmetic.add = function(a,b) {
  let sum = 0;
  if( typeof a === 'object') {
    //add everything in array a
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return sum;
  }
  return check_value() ? null : a+b;
};

arithmetic.subtract = function (a,b) {
  let difference = 0;
  if( typeof a === 'object') {
    //deduct everything in array a
    for (let i = 0; i < a.length; i++) {
      difference += a[i];
    }
    return difference;
  }
  return check_value() ? null : a-b;
};

arithmetic.multiply = function(a,b) {
  let product = 0;
  if( typeof a === 'object') {
    //multiply everything in array a
    for (let i = 0; i < a.length; i++) {
      product += a[i];
    }
    return product;
  }
  return check_value() ? null : a*b;
};

arithmetic.divide = function(a,b) {
  let quotient = 0;
  if( typeof a === 'object') {
    //divide everything in array a
    for (let i = 0; i < a.length; i++) {
      quotient += a[i];
    }
    return quotient;
  }
  return check_value() ? null : a/b;
};
