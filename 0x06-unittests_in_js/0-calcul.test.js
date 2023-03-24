const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Test calculateNumber function", () => {
    describe("Calculate two integers", () => {
        it("Should return 3", () => {
            assert.strictEqual(calculateNumber(1, 2), 3);
        })
    })

    describe("Calculate 0 and integer",  () => {
        it("SHould return 1", () => {
            assert.strictEqual(calculateNumber(0, 1), 1);
        })
    })

    describe("Calculate two zeros", () => {
        it("Should return 0", () => {
            assert.strictEqual(calculateNumber(0, 0), 0);
        })
    })

    describe("Calculate two floats",  () => {
        it("It should return 4", () => {
            assert.strictEqual(calculateNumber(1.1, 2.8), 4);
        })
    })
})