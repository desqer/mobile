import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-native-router-flux'
import {
  createStore,
  applyMiddleware,
  compose,
  bindActionCreators }
from 'redux'

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
import { ActionCreators } from 'app/redux/actions'

/**
 * Create redux store
 */
const middleware = [thunkMiddleware, loggerMiddleware]
export const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)

/**
 * Create Router with store
 */
export const ReduxRouter = connect(
  () => { return {} },
  (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(Router)
