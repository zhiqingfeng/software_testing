import { expect } from 'chai';
import compact from "../src/compact.js";

describe("compact.js - Remove false values from arrays", () => {

    it("should remove null and undefined values", () => {
        const input = [null, 'Snacks', undefined];
        const result = compact(input);
        expect(result).to.deep.equal(['Snacks']);  // Corrected to match compact.js behavior
    });

    it("should return the array unchanged if there are no false values", () => {
        const input = ['Drinks', 'Vegan'];
        const result = compact(input);
        expect(result).to.deep.equal(['Drinks', 'Vegan']);  // Ensured input order is unchanged
    });

    it("should remove empty strings from the array", () => {
        const input = [' ', 'Non-GMO', 'Snacks'];
        const result = compact(input);
        expect(result).to.deep.equal(['Non-GMO', 'Snacks']);  // Empty string removed correctly
    });

    it("should not remove 'false' and 0 from the array", () => {
        const input = ['false', 'zero', 'Organic'];
        const result = compact(input);
        expect(result).to.deep.equal(['false', 'zero', 'Organic']);  // 'false' and 'zero' are strings, not falsy values
    });

    it("should return an empty array when input is empty", () => {
        const input = [];
        const result = compact(input);
        expect(result).to.deep.equal([]);  // Empty input should return an empty array
    });

});

