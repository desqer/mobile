import React from 'react'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

/**
 * Middlewares
 */
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

/**
 * Actions & Reducers
 */
import reducers from './redux/reducers'

/**
 * Create redux store
 */
const middleware = [thunkMiddleware, loggerMiddleware]
export const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)
