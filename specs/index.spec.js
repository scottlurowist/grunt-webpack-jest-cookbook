
const addNumbers = require('../src/index');


describe("addNumber()", () => {

    it("should return 5", () => {

        const actualResult = addNumbers(2, 3);

        expect(actualResult).toEqual(5);
    });
});