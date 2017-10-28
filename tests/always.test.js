const always = require('../src/always')

const always42 = always(42)

describe('always', () => {
  it('returns given input on empty call', () => {
    expect(always42()).toBe(42)
  })

  it('returns given input regardless of arguments passed', () => {
    expect(always42('foo', 'bar')).toBe(42)
  })
})
