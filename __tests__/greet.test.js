'use strict';

const Greet = require('../lib/greet.js');

// Write a test the expects the greet module to return 'hello world'
// This should happen when invoked with 'world' as the first argument

describe('greet', () => {
  it('return null if not a string', () => {
    let hello = Greet.greet();
    expect(hello).toBeNull();
  });
  it('return true if a string', () => {
    let hello = Greet.greet();
    if(typeof hello === 'string'){
      expect(hello).to.be.true;
    }
  });
  it('return hello concatenated with a name if a string', () => {
    let hello = Greet.greet('Joseph');
    if(typeof hello === 'string'){
      expect(hello).toBe(`hello Joseph`);
    }
  });
});