import { expect } from 'chai';
import countBy from "../src/countBy.js";

describe("countBy.js", () => {

    // 1. Check if the function counts by the 'active' property (boolean values)
    it("should count the occurrences of specific attribute values", () => {
        const users = [
            { user: "barney", active: true },
            { user: "betty", active: true },
            { user: "fred", active: false },
        ];
        const result = countBy(users, (value) => value.active.toString());  // Ensure boolean is treated as string
        expect(result).to.deep.equal({ "true": 2, "false": 1 });
    });

    // 2. Ensure the function handles numeric values correctly
    it("should return the number if number is valid", () => {
        const numbers = [1.8, 2.2, 3.3, 2.4];
        const result = countBy(numbers, (value) => Math.floor(value));
        expect(result).to.deep.equal({ '1': 1, '2': 2, '3': 1 });
    });

    // 3. Ensure valid numeric strings are converted to their correct numeric value
    it("should convert valid numeric strings into their correct numeric value", () => {
        const values = ["1.8", "2.2", "3.3", "2.4"];
        const result = countBy(values, (value) => Math.floor(Number(value))); // Convert string to number first
        expect(result).to.deep.equal({ '1': 1, '2': 2, '3': 1 });
    });

    // 4. Ensure the function handles arrays with duplicate values correctly
    it("should handle arrays with duplicate values", () => {
        const numbers = [1, 2, 2, 3, 3, 3];
        const result = countBy(numbers, (value) => value.toString());  // Ensure numbers are treated as strings
        expect(result).to.deep.equal({ '1': 1, '2': 2, '3': 3 });
    });

    // 5. Ensure the function throws an error for invalid collection input
    it("should throw an error for invalid collection input", () => {
        expect(() => countBy(null, (value) => value)).to.throw();
        expect(() => countBy(undefined, (value) => value)).to.throw();
        expect(() => countBy("not a collection", (value) => value)).to.throw();
    });

    // Other tests as before
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

