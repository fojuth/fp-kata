// FIXME: refactor and simplify

const partial = require('./partial')

const curry = (f, argsAmount, argsPassed = 0, args) => {
  argsPassed += args.length

  if (argsPassed >= argsAmount) {
    return f(...args)
  }
  else {
    return (...nextArgs) => curry(partial(f, args), argsAmount, argsPassed, nextArgs)
  }
}

module.exports = f => (...args) => curry(f, f.length, 0, args)
