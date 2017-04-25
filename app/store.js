import React from 'react'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

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
const store = compose(
  applyMiddleware(...middleware),
  autoRehydrate()
)(createStore)(reducers)

persistStore(store, {
  whitelist: [
    'signToken',
    'signUser'
  ],
  storage: AsyncStorage
})

export { store }
