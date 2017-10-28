const reverse = require('../src/reverse')

describe('reverse', () => {
  it('reverses an array', () => {
    expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1])
  })

  it('does nothing on an empty array', () => {
    expect(reverse([])).toEqual([])
  })

  it('reverses a string', () => {
    expect(reverse('foobar')).toBe('raboof')
  })

  it('does nothing on an empty string', () => {
    expect(reverse('')).toBe('')
  })
})
