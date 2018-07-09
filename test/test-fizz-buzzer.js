const fizzBuzzer = require('../fizzBuzzer');

const expect = require('chai').expect;

describe('fizzBuzzer', function() {
    it('should return a string or num based on divisibility of numbers', function() {
        const normalCases = [
            [9, 'fizz'],
            [10, 'buzz'],
            [30, 'fizz-buzz'],
            [11, 11]
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(normalCases[0]);
            expect(answer).to.equal(normalCases[1]);
        })
    });
    it('should raise errors for non-number inputs', function() {
        const badInputs = [true, 'string', null];
        badInputs.forEach(function(input) {
            expect(function() {fizzBuzzer(input)})
            .to.throw(Error);
        });
    });
})