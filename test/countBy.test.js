import { expect } from 'chai';
import countBy from "../src/countBy.js";

describe("countBy.js", () => {

    // Test Case 1: Get the count by a specific attribute of objects in an array.
    it("should return count by a specific attribute of objects in an array", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        
        const result = countBy(users, (value) => value.active);

        expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
    });

    // Test Case 2: Return number if number is valid (handles valid numeric strings and numbers).
    it("should return number if number is valid", () => {
        const result = countBy([1.8], (value) => value);
        expect(result).to.deep.equal({ '1.8': 1 });
    });

    // Additional test case to handle numeric strings, checking if countBy can handle them as numbers.
    it("should return count of valid numeric strings", () => {
        const result = countBy([1, '1', 2, '2'], (value) => value);
        expect(result).to.deep.equal({ '1': 2, '2': 2 });
    });
});

