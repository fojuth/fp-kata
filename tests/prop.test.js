const prop = require('../src/prop')
const o = {
  foo: 42
}

describe('prop', () => {
  it('returns value of the property', () => {
    expect(prop('foo', o)).toBe(42)
  })

  it('returns undefined if property is missing', () => {
    expect(prop('bar', o)).toBe(undefined)
  })
})
