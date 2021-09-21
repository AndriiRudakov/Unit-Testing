const { expect } = require("@jest/globals")

const {sum, score} = require('./app')

test('If that Delete what i need', () => {
    expect(sum([5,9,0,1,5,0,9])).toBe([9,1,9]);
})

test('If true score', () => {
    expect(score([1,4,6,7,8,9,5])).toBe(23);
})