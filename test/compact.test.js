import { expect } from 'chai';
import compact from "../src/compact.js";

describe("compact.js", () => {

  // Test Case 1: Remove null and undefined values
  it('should remove null and undefined values', () => {
    const input = [null, 'Snacks', undefined];
    const output = ['Snacks'];
    expect(compact(input)).to.deep.equal(output);
  });

  // Test Case 2: Pass array with no false values
  it('should return the same array when there are no false values', () => {
    const input = ['Drinks', 'Vegan'];
    const output = ['Drinks', 'Vegan'];
    expect(compact(input)).to.deep.equal(output);
  });

  // Test Case 3: Remove empty strings from array
  it('should remove empty strings from the array', () => {
    const input = [' ', 'Non-GMO', 'Snacks'];
    const output = ['Non-GMO', 'Snacks'];
    expect(compact(input)).to.deep.equal(output);
  });

  // Test Case 4: Remove false and 0 from array
  it('should remove false and 0 values from the array', () => {
    const input = [false, 'zero', 'Organic'];
    const output = ['Organic'];
    expect(compact(input)).to.deep.equal(output);
  });

  // Test Case 5: Empty array input
  it('should return an empty array when the input is empty', () => {
    const input = [];
    const output = [];
    expect(compact(input)).to.deep.equal(output);
  });

});

