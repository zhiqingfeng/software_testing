import { expect } from 'chai';
import divide from "../src/divide.js";

describe("divide.js", () => {

    it("should return NaN for divide(10, 0)", () => {
        expect(divide(10, 0)).to.be.NaN;
    });


    it("should return 1 for divide(1, 1)", () => {
        expect(divide(1, 1)).to.equal(1);
    });
});
