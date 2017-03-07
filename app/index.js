import React, { Component } from 'react'
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
import Detail from 'app/scenes/calendar/scenes/detail'
import New from 'app/scenes/calendar/scenes/new'

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

            <Scene
              key="app"
              tabs={true}
              tabBarStyle={{ height: 60, backgroundColor: '#BE446D' }}
            >
              <Scene key="profile" navBar={Header} component={SignPhone} title="Minha conta" icon={ProfileIcon} />
              <Scene key="appointments" navBar={Header} icon={DesqerIcon} initial={true}>
                <Scene key="calendar" component={Calendar} />
                <Scene key="new" component={New} initial={true} title="Criar serviço" />
              </Scene>
              <Scene key="history" navBar={Header} component={SignUp} title="Histórico" icon={HistoryIcon} />
            </Scene>
          </Scene>
        </ReduxRouter>
      </Provider>
    )
  }
}
