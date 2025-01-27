import { expect } from 'chai';
import { add, sub, mul, div } from '../calculator.js';

describe("Calculator Functionality", () => {
    describe("Addition", () => {
        it("should correctly compute add(5, 2) as 7", () => {
            expect(add(5, 2)).to.equal(7);
        });
        it("should not return 8 for add(5, 2)", () => {
            expect(add(5, 2)).to.not.equal(8);
        });
    });

    describe("Subtraction", () => {
        it("should correctly compute sub(5, 2) as 3", () => {
            expect(sub(5, 2)).to.equal(3);
        });
        it("should not return 5 for sub(5, 2)", () => {
            expect(sub(5, 2)).to.not.equal(5);
        });
    });

    describe("Multiplication", () => {
        it("should correctly compute mul(5, 2) as 10", () => {
            expect(mul(5, 2)).to.equal(10);
        });
        it("should not return 12 for mul(5, 2)", () => {
            expect(mul(5, 2)).to.not.equal(12);
        });
    });

    describe("Division", () => {
        it("should correctly compute div(10, 2) as 5", () => {
            expect(div(10, 2)).to.equal(5);
        });
        it("should not return 2 for div(10, 2)", () => {
            expect(div(10, 2)).to.not.equal(2);
        });
    });
});