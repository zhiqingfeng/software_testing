import { expect } from 'chai';
import divide from "../src/divide.js";

describe("divide.js", () => {
    it("should return 1.5 for divide(6, 4)", () => {
        expect(divide(6, 4)).to.equal(1.5);
    });

    it("should return 2 for divide(10, 5)", () => {
        expect(divide(10, 5)).to.equal(2);
    });

    it("should return NaN for divide(10, 0)", () => {
        expect(divide(10, 0)).to.be.NaN;
    });

    it("should handle negative numbers", () => {
        expect(divide(-10, 5)).to.equal(-2);
        expect(divide(10, -5)).to.equal(-2);
    });

    it("should handle decimals", () => {
        expect(divide(7.5, 2.5)).to.equal(3);
    });

    it("should return 0 when dividend is 0", () => {
        expect(divide(0, 5)).to.equal(0);
    });

    it("should handle large numbers", () => {
        expect(divide(1000000000, 2000000000)).to.equal(0.5);
    });

    it("should throw an error or return NaN for invalid inputs", () => {
        expect(() => divide("6", 4)).to.throw(); // If input validation exists
        expect(divide("6", 4)).to.be.NaN;       // If input validation doesn’t exist
        expect(divide(6, "4")).to.be.NaN;
        expect(divide("6", "4")).to.be.NaN;
    });

    it("should return 1 for divide(1, 1)", () => {
        expect(divide(1, 1)).to.equal(1);
    });
});
