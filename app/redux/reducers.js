import { combineReducers } from 'redux'

import routes from 'app/routes'
import * as signReducer from 'app/scenes/sign/redux/reducers'

export default combineReducers(Object.assign(
  routes,
  signReducer,
))
