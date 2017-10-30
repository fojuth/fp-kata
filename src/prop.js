const curry = require('./curry')

module.exports = curry(
  (prop, object) => object[prop] ? object[prop] : undefined
)
