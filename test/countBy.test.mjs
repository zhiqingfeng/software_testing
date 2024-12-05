import { expect } from 'chai';
import countBy from "../src/countBy.js";

describe("countBy.js", () => {

    it("should return an empty object for an empty array", () => {
        const result = countBy([], (value) => value);
        expect(result).to.deep.equal({});
    });

    it("should throw an error for invalid iteratee", () => {
        const input = [1, 2, 3];
        expect(() => countBy(input, null)).to.throw();
        expect(() => countBy(input, undefined)).to.throw();
    });
});

