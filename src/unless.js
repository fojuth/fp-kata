const ifElse = require('./ifElse')
const identity = require('./identity')

module.exports = (f, onFalse) => ifElse(f, identity, onFalse)
