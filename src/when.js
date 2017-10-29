const ifElse = require('./ifElse')
const identity = require('./identity')

module.exports = (f, onTrue) => ifElse(f, onTrue, identity)
