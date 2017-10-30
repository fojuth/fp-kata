const partial = require('./partial')

const curry = (f, argsAmount, argsPassed = 0, args) => {
  argsPassed += args.length

  if (argsPassed >= argsAmount) {
    return f(...args)
  }
  else {
    return (...a) => curry(partial(f, args), argsAmount, argsPassed, a)
  }
}

module.exports = f => (...args) => {
  const argsAmount = f.length

  return curry(f, argsAmount, 0, args)
}
