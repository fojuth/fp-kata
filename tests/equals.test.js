const equals = require('../src/equals')

describe('equals', () => {
  it('is true if args are equal', () => {
    expect(equals(2, 2)).toBe(true)
    expect(equals(2)(2)).toBe(true)
  })

  it('is false args are not equal', () => {
    expect(equals(2, 1)).toBe(false)
    expect(equals(2)(3)).toBe(false)
  })
})
