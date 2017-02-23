import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import { connect, Provider } from 'react-redux'
import { ActionCreators } from 'app/redux/actions'

import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose, bindActionCreators } from 'redux'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

const ReduxRouter = connect((state) => {
    return {
        signUser: state.signUser
    }
}, mapDispatchToProps)(Router);

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
        <ReduxRouter>
          <Scene key="root" hideNavBar={true}>
            <Scene key="sign.signphone" component={SignPhone} title="Entrar" initial={true} />
          </Scene>
        </ReduxRouter>
      </Provider>
    )
  }
}
