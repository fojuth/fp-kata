const curry = require('./curry')
const any = require('./any')
const equals = require('./equals')

module.exports = curry(
  (predicates, value) => (
    any(
      equals(true),
      predicates.map(p => p(value))
    )
  )
)
