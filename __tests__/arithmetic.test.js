'use strict';

const arithmetic = require('../lib/arithmetic.js');

const faker = require('faker');

const randomNum = faker.random.number();

const numOne = randomNum;
const numTwo = randomNum;

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
    }  
  });
  it('if a number when multiplying, return true', () => {
    let product = arithmetic.multiply();
    if(typeof product === 'number'){
      expect(product).to.be.true;
    }  
  });
  it('if a number when dividing, return true', () => {
    let quotient = arithmetic.divide();
    if(typeof quotient === 'number'){
      expect(quotient).to.be.true;
    }  
  });
  it('returns sum if adding two numbers', () => {
    let sum = arithmetic.add(numOne, numTwo);
    expect(numOne + numTwo).toBe(sum);
  });
  it('returns difference if subtracting two numbers', () => {
    let difference = arithmetic.subtract(numOne, numTwo);
    expect(numOne - numTwo).toBe(difference);
  });
  it('returns product if multiplying two numbers', () => {
    let product = arithmetic.multiply(numOne, numTwo);
    expect(numOne * numTwo).toBe(product);
  });
  it('returns quotient if dividing two numbers', () => {
    let quotient = arithmetic.divide(numOne, numTwo);
    expect(numOne / numTwo).toBe(quotient);
  });
  it('returns sum if adding numbers in array', () => {
    let sum = arithmetic.add([randomNum, randomNum, randomNum, randomNum]);
    expect(randomNum + randomNum + randomNum + randomNum).toBe(sum);
  });
  it('returns difference if subtracting numbers in array', () => {
    let difference = arithmetic.subtract([10, 5]);
    expect(10 - 5).toBe(difference);
  });
  it('returns product if multiplying numbers in array', () => {
    let product = arithmetic.multiply([randomNum, randomNum, randomNum, randomNum]);
    expect(randomNum * randomNum * randomNum * randomNum).toBe(product);
  });
  it('returns quotient if dividing numbers in array', () => {
    let quotient = arithmetic.divide([randomNum, randomNum, randomNum, randomNum]);
    expect(randomNum / randomNum / randomNum / randomNum).toBe(quotient);
  });
});
