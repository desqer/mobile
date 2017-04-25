import createReducer from 'app/common/lib/CreateReducer'

export const signUser = createReducer({}, {
  ['sign/SET_USER'](state, action) {
    return action.user
  }
})
