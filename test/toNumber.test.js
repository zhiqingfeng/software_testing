import { expect } from 'chai';
import toNumber from "../src/toNumber.js";

describe("toNumber.js", () => {
    it("should return the same number for numeric input", () => {
        expect(toNumber(3.2)).to.equal(3.2);
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toNumber(Infinity)).to.equal(Infinity);
        expect(toNumber(0)).to.equal(0);
    });

    it("should parse numeric strings correctly", () => {
        expect(toNumber("3.2")).to.equal(3.2);
        expect(toNumber("  42  ")).to.equal(42); // Leading/trailing whitespace
    });

    it("should handle binary strings", () => {
        expect(toNumber("0b101")).to.equal(5); // Binary representation
    });

    it("should handle octal strings", () => {
        expect(toNumber("0o10")).to.equal(8); // Octal representation
    });

    it("should handle hexadecimal strings", () => {
        expect(toNumber("0x1f")).to.equal(31); // Hexadecimal representation
    });

    it("should return NaN for invalid hexadecimal strings", () => {
        expect(toNumber("0x1g")).to.be.NaN; // Invalid hexadecimal
    });

    it("should return NaN for symbols", () => {
        expect(toNumber(Symbol("symbol"))).to.be.NaN;
    });

    it("should handle objects with valueOf method", () => {
        const obj = {
            valueOf: () => 42
        };
        expect(toNumber(obj)).to.equal(42);
    });

    it("should handle objects without valueOf method", () => {
        const obj = { a: 1 };
        expect(toNumber(obj)).to.be.NaN;
    });

    it("should handle arrays", () => {
        expect(toNumber([42])).to.equal(42); // Single-element array
        expect(toNumber([1, 2])).to.be.NaN; // Multi-element array
    });

    it("should return NaN for null or undefined", () => {
        expect(toNumber(null)).to.equal(0); // Special case: null is coerced to 0
        expect(toNumber(undefined)).to.be.NaN;
    });

    it("should handle edge cases with `0`", () => {
        expect(toNumber(0)).to.equal(0); // 0 should remain 0
        expect(toNumber(-0)).to.equal(-0); // -0 should remain -0
    });

    it("should handle empty objects gracefully", () => {
        expect(toNumber({})).to.be.NaN;
    });

    it("should handle very large numbers in strings", () => {
        expect(toNumber("1e+30")).to.equal(1e30); // Scientific notation
    });
});
