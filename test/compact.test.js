import { expect } from 'chai';
import compact from "../src/compact.js";

describe("compact.js - Remove false values from arrays", () => {

    it("should remove empty strings from the array", () => {
        const input = [' ', 'Non-GMO', 'Snacks'];
        const result = compact(input);
        expect(result).to.deep.equal(['Non-GMO', 'Snacks']);  // Empty string removed correctly
    });


    it("should return an empty array when input is empty", () => {
        const input = [];
        const result = compact(input);
        expect(result).to.deep.equal([]);  // Empty input should return an empty array
    });

});

