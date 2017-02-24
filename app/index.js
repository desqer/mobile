import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import { Provider } from 'react-redux'

import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './redux/reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

const middleware = [thunkMiddleware, loggerMiddleware]
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)
 
/**
 * Scenes
 */
import SignPhone from 'app/scenes/sign/scenes/signphone'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'

import Calendar from 'app/scenes/calendar'
import Detail from 'app/scenes/event/scenes/detail'

/**
 * Common components
 */
import Footer from 'app/common/components/Footer'

export default class Desqer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="sign.signphone" component={SignPhone} title="Entrar" initial={true} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
