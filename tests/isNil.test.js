const isNil = require('../src/isNil')

describe('isNil', () => {
  it('returns true if undefined', () => {
    expect(isNil(undefined)).toBe(true)
  })

  it('returns true if null', () => {
    expect(isNil(null)).toBe(true)
  })

  it('returns false if 0', () => {
    expect(isNil(0)).toBe(false)
  })

  it('returns false if []', () => {
    expect(isNil([])).toBe(false)
  })

  it('returns false if {}', () => {
    expect(isNil({})).toBe(false)
  })

  it('returns false if string', () => {
    expect(isNil('string')).toBe(false)
  })
})
