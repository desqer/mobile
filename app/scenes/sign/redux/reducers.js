import * as types from './types'
import createReducer from 'app/common/lib/CreateReducer'

export const signUser = createReducer({}, {
  [types.SET_USER](state, action) {
    return action.user
  }
})
