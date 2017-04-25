import { combineReducers } from 'redux'

import { Routes } from 'app/routes'
import * as globalReducers from 'app/common/redux/reducers'

const navReducer = (state, action) => {
  const newState = Routes.router.getStateForAction(action, state)
  return newState || state
}

export default combineReducers(Object.assign(
  { nav: navReducer },
  globalReducers
))
