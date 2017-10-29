const any = require('../src/any')

const equals3 = value => value === 3

describe('any', () => {
  it('is true if at least one element matches the predicate', () => {
    expect(any(equals3, [1, 1, 3, 1])).toBe(true)
  })

  it('is false if no elements match the predicate', () => {
    expect(any(equals3, [1, 1, 1, 1])).toBe(false)
  })
})
