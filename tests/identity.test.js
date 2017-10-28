const identity = require('../src/identity')

describe('identity', () => {
  it('returns given input', () => {
    expect(identity(42)).toBe(42)
  })
})
