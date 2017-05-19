import { combineReducers } from 'redux'

import { Routes, AuthRoutes } from 'app/routes'
import * as globalReducers from 'app/common/redux/reducers'
import * as calendarReducers from 'app/scenes/calendar/reducers'

const authNavReducer = (state, action) => {
  const newState = AuthRoutes.router.getStateForAction(action, state)

  return newState || state
}

const navReducer = (state, action) => {
  const newState = Routes.router.getStateForAction(action, state)

  return newState || state
}

export default combineReducers(Object.assign(
  { authNav: authNavReducer },
  { nav: navReducer },
  globalReducers,
  calendarReducers
))
