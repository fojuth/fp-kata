const T = require('../src/T')

describe('T', () => {
  it('returns true on empty call', () => {
    expect(T()).toBe(true)
  })

  it('returns true regardless of arguments passed', () => {
    expect(T('foo', 'bar')).toBe(true)
  })
})
