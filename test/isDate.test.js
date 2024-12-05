import { expect } from 'chai';
import isDate from "../src/isDate.js";

describe("isDate.js", () => {
    it("should return true for a valid Date object", () => {
        const result = isDate(new Date());
        expect(result).to.be.true;
    });

    it("should return false for a string that looks like a date", () => {
        const result = isDate("Mon April 23 2012");
        expect(result).to.be.false;
    });

    it("should return false for a timestamp number", () => {
        const result = isDate(1659394800000); // Example timestamp
        expect(result).to.be.false;
    });

    it("should return false for null or undefined", () => {
        expect(isDate(null)).to.be.false;
        expect(isDate(undefined)).to.be.false;
    });

    it("should return false for plain objects", () => {
        const result = isDate({ year: 2023, month: 12, day: 1 });
        expect(result).to.be.false;
    });

    it("should return false for arrays", () => {
        const result = isDate(["2023-12-01"]);
        expect(result).to.be.false;
    });

    it("should return true for an invalid Date object", () => {
        const result = isDate(new Date("invalid date"));
        expect(result).to.be.true; // It's still a Date object, even if it's invalid.
    });

    it("should handle custom Date-like objects", () => {
        const customDate = { toString: () => "[object Date]" };
        const result = isDate(customDate);
        expect(result).to.be.false;
    });

    it("should handle edge cases with other object types", () => {
        expect(isDate(new Map())).to.be.false;
        expect(isDate(new Set())).to.be.false;
    });
});
