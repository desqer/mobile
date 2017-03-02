import { combineReducers } from 'redux'

import routes from 'app/routes'
import * as signPhoneReducer from 'app/scenes/sign/redux/reducers'

export default combineReducers(Object.assign(
  routes,
  signPhoneReducer,
))
