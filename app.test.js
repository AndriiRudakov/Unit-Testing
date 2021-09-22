const { test, expect } = require('@jest/globals');
const nNumber = require('./app');
const score = require('./app');

test('Does delete 0 and 5 values from number', () => {
    expect(nNumber(59015509)).toEqual(919);
})

test('Does it correct score', () => {
    expect(score([3,5,6,7,9])).toBe(18);
})