import { expect } from 'chai';
import isDate from "../src/isDate.js";

describe("isDate.js", () => {
    // Test Case 1: Pass new Date() to the module (valid Date object).
    it("should return true for a valid Date object (new Date())", () => {
        const result = isDate(new Date());
        expect(result).to.equal(true);
    });

    // Test Case 2: Pass string to the module (invalid Date object).
    it("should return false for a string input", () => {
        const result = isDate("Fri October 11 2024");
        expect(result).to.equal(false);
    });

    // Test Case 3: Pass number to the module (invalid Date object).
    it("should return false for a number input", () => {
        const result = isDate(1234);
        expect(result).to.equal(false);
    });

    // Test Case 4: Pass null to the module (invalid Date object).
    it("should return false for a null input", () => {
        const result = isDate(null);
        expect(result).to.equal(false);
    });

    // Test Case 5: Pass new Date(2024, 11, 10) to the module (valid Date object).
    it("should return true for a valid Date object (new Date(2024, 11, 10))", () => {
        const result = isDate(new Date(2024, 11, 10));
        expect(result).to.equal(true);
    });
});