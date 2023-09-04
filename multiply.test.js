const multiply = require('./multiply')

describe('add', () => {
    it('multiplies 2 and 5', () => {
        expect(multiply(2, 5)).toBe(10);
    });
});
