module.exports = (f, onTrue, onFalse) => value => (
  f(value) ? onTrue(value) : onFalse(value)
)
