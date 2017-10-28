const F = require('../src/F')

describe('F', () => {
  it('returns false on empty call', () => {
    expect(F()).toBe(false)
  })

  it('returns false regardless of arguments passed', () => {
    expect(F('foo', 'bar')).toBe(false)
  })
})
