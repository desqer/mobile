import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Provider, connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'

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

/**
 * Scenes
 */
import SignPhone from 'app/scenes/sign/scenes/signphone'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'

import Calendar from 'app/scenes/calendar'
import Detail from 'app/scenes/event/scenes/detail'

import Header from 'app/scenes/calendar/components/Header'

/**
 * Tab icons
 */
import {
  ProfileIcon,
  DesqerIcon,
  HistoryIcon
} from 'app/common/components/Footer'

export default class Desqer extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Scene key="root" hideNavBar={true}>
            <Scene key="signPhone" component={SignPhone} initial={true} />
            <Scene key="signUp" component={SignUp} />
            <Scene key="signIn" component={SignIn} />

            <Scene key="app" navBar={Header} navigationBarStyle={styles.navBar}>
              <Scene key="calendar" component={Calendar} initial={true} />
            </Scene>
          </Scene>
        </ReduxRouter>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FFF',
    shadowColor: "#ddd",
    shadowOpacity: 1,
    shadowRadius: 10,
    paddingTop: 25,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 0
  }
});
