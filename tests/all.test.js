const all = require('../src/all')

const equals3 = value => value === 3

describe('all', () => {
  it('is true if all elements match the predicate', () => {
    expect(all(equals3, [3, 3, 3, 3])).toBe(true)
  })

  it('is false if any of the elements do not match the predicate', () => {
    expect(all(equals3, [3, 3, 1, 3])).toBe(false)
  })
})
