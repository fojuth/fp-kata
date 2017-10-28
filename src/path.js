const prop = require('./prop')

const objectProp = (propPath, object) => {

  // TODO Possibly can be simplified with `converge`
  const [propName, pathRest] = [propPath.slice(0, 1), propPath.slice(1)]
  const newObject = prop(propName, object)

  return newObject ? path(pathRest, newObject) : undefined
}

const path = (propPath, object) => prop('length', propPath) ? objectProp(propPath, object) : object

module.exports = path
