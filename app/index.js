import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'
import scenes from './routes'

/**
 * Middlewares
 */
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

import { createStore, applyMiddleware, compose, bindActionCreators } from 'redux'

/**
 * Actions & Reducers
 */
import reducers from './redux/reducers'
import { ActionCreators } from 'app/redux/actions'

/**
 * Create redux store
 */
const middleware = [thunkMiddleware, loggerMiddleware]
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)

/**
 * Create Router with store
 */
const ReduxRouter = connect(
  () => { return {} },
  (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(Router)

export default class Desqer extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter scenes={scenes} />
      </Provider>
    )
  }
}
