import { expect } from "chai";
import add from "../src/add.js";

describe("add.js", () => {
  it('should add two positive numbers', () => {
    expect(add(10, 20)).to.equal(30);
  });

  it('should add a positive and a negative number', () => {
    expect(add(50, -10)).to.equal(40);
  });

  it('should add a number and zero', () => {
    expect(add(29.99, 0)).to.equal(29.99);
  });

  it('should add two decimal numbers', () => {
    expect(add(1.50, 2.25)).to.equal(3.75);
  });

  it('should add a negative number and zero', () => {
    expect(add(-20, 0)).to.equal(-20);
  });
});
