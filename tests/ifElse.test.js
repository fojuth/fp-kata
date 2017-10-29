const ifElse = require('../src/ifElse')
const T = require('../src/T')
const F = require('../src/F')

const equals3 = ifElse(
  value => value === 3,
  T,
  F
)

describe('ifElse', () => {
  it('returns the result of second function passed when condition is met', () => {
    expect(equals3(3)).toBe(true)
  })

  it('returns the result of third function passed when condition is not met', () => {
    expect(equals3(5)).toBe(false)
  })
})
