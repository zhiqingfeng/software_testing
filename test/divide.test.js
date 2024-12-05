import { expect } from 'chai';
import divide from "../src/divide.js";

describe("divide.js", () => {

    // Test Case 1: Divide two positive numbers
    it("should return the correct quotient when dividing two positive numbers", () => {
        const result = divide(100, 4);
        expect(result).to.equal(25);
    });

    // Test Case 2: Divide a number by zero (should return NaN)
    it("should return NaN when dividing a number by zero", () => {
        const result = divide(50, 0);
        expect(result).to.be.NaN;
    });

    // Test Case 3: Divide by a decimal number
    it("should return the correct quotient when dividing by a decimal", () => {
        const result = divide(100, 10);
        expect(result).to.equal(10);
    });

    // Test Case 4: Divide a negative number by a positive number
    it("should return the correct quotient when dividing a negative number by a positive number", () => {
        const result = divide(-20, 5);
        expect(result).to.equal(-4);
    });

    // Test Case 5: Divide two decimal numbers
    it("should return the correct quotient when dividing two decimal numbers", () => {
        const result = divide(7.5, 2.5);
        expect(result).to.equal(3);
    });
});
