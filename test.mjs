// In test.mjs
import { expect } from 'chai';
import { myFunction } from './index.js';

describe('myFunction', function() {
  it('should work correctly', function() {
    expect(myFunction()).to.equal('expected result');
  });
});

