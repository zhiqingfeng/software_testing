import { expect } from 'chai';
import toNumber from "../src/toNumber.js";

describe("toNumber.js", () => {
     // Test Case 1: Convert a string input to a number.
    it("should return NaN for non-numeric string input", () => {
        const result = toNumber('1.8');
        expect(result).to.be.NaN;
    });

    // Test Case 2: Return number if the number is valid.
    it("should return the valid number input", () => {
        const result = toNumber(1.8);
        expect(result).to.equal(1.8);
    });

    // Test Case 3: Return NaN if it's an invalid number (using a comma instead of a dot).
    it("should return NaN for invalid number (comma separator)", () => {
        const result = toNumber('1,8');
        expect(result).to.be.NaN;
    });

    // Test Case 4: Return 0 if input is empty.
    it("should return 0 for empty input", () => {
        const result = toNumber('');
        expect(result).to.equal(0);
    });

    // Test Case 5: Return NaN for non-numeric string (e.g., text).
    it("should return NaN for a non-numeric string input", () => {
        const result = toNumber('abc');
        expect(result).to.be.NaN;
    });

    // Test Case 6: Return number for a valid binary string.
    it("should return a number for valid binary string input", () => {
        const result = toNumber('0b101');
        expect(result).to.equal(5);  // binary '101' is 5 in decimal
    });

    // Test Case 7: Return number for valid octal string.
    it("should return a number for valid octal string input", () => {
        const result = toNumber('0o17');
        expect(result).to.equal(15);  // octal '17' is 15 in decimal
    });

    // Test Case 8: Return NaN for invalid hexadecimal string.
    it("should return NaN for invalid hexadecimal string", () => {
        const result = toNumber('0xG1');
        expect(result).to.be.NaN;  // 'G' is not a valid hexadecimal digit
    });
});