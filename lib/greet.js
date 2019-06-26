'use strict';

module.exports = exports = {};

exports.greet = (name) => {
  if (typeof name !== 'string'){
    return null;
  }
  return `hello ${name}`;
};