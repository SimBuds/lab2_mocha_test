// Casey Hsu - 101376814
const assert = require('chai').assert;
const { add, sub, mul, div } = require('../calculator');

describe('Calculator Tests', function() {
    describe('Addition Tests', function() {
        it('Expecting a 7 when adding 5 and 2', function() {
            assert.equal(add(5, 2), 7);
        });
        it('Expecting a fail when expecting 8 when adding 5 and 2', function() {
            assert.notEqual(add(5, 2), 8);
        });
    });

    describe('Subtraction Tests', function() {
        it('Expecting a 3 when subtracting 5 and 2', function() {
            assert.equal(sub(5, 2), 3);
        });
        it('Expecting a fail when expecting 8 when subtracting 5 and 2', function() {
            assert.notEqual(sub(5, 2), 8);
        });
    });

    describe('Multiplication Tests', function() {
        it('Expecting a 10 when multiplying 5 and 2', function() {
            assert.equal(mul(5, 2), 10);
        });
        it('Expecting a fail when expecting 8 when multiplying 5 and 2', function() {
            assert.notEqual(mul(5, 2), 8);
        });
    });

    describe('Division Tests', function() {
        it('Expecting a 2.5 when dividing 5 and 2', function() {
            assert.equal(div(5, 2), 2.5);
        });
        it('Expecting a fail when expecting 8 when dividing 5 and 2', function() {
            assert.notEqual(div(5, 2), 8);
        });
    });
});