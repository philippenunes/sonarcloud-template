const sum = require('./index.js');

test('should sum', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
})