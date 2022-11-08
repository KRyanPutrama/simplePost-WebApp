import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const registeredMiddlewares = (getDefautltMiddleware: any) => {
  const middlewares = getDefautltMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })

  middlewares.push(thunkMiddleware)
  middlewares.push(promiseMiddleware)

  return middlewares
}

export default registeredMiddlewares
