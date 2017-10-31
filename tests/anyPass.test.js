const anyPass = require('../src/anyPass')

const equals3 = value => value === 3
const equals7 = value => value === 7

const is3or7 = anyPass([equals3, equals7])

describe('anyPass', () => {
  it('is true if the element matches at least one predicate', () => {
    expect(is3or7(3)).toBe(true)
    expect(is3or7(7)).toBe(true)
  })

  it('is false if the element does not match any predicate', () => {
    expect(is3or7(4)).toBe(false)
  })
})
