'use strict';

const arithmetic = require('../lib/arithmetic.js');

// const faker = require('faker');

// const randomNum = faker.random.number();

describe('Arithmetic', () => {
  it('if not a number when adding, return null', () => {
    let sum = arithmetic.add();
    expect(sum).toBeNull();
  });
  it('if not a number when subtracting, return null', () => {
    let difference = arithmetic.subtract();
    expect(difference).toBeNull();
  });
  it('if not a number when multiplying, return null', () => {
    let product = arithmetic.multiply();
    expect(product).toBeNull();
  });
  it('if not a number when dividing, return null', () => {
    let quotient = arithmetic.divide();
    expect(quotient).toBeNull();
  });
  it('if a number when adding, return true', () => {
    let sum = arithmetic.add();
    if(typeof sum === 'number'){
      expect(sum).to.be.true;
    }
  });
  it('if a number when subtracting, return true', () => {
    let difference = arithmetic.subtract();
    if(typeof difference === 'number'){
      expect(difference).to.be.true;
    }  });
  it('if a number when multiplying, return true', () => {
    let product = arithmetic.multiply();
    if(typeof product === 'number'){
      expect(product).to.be.true;
    }  });
  it('if a number when dividing, return true', () => {
    let quotient = arithmetic.divide();
    if(typeof quotient === 'number'){
      expect(quotient).to.be.true;
    }  });
});