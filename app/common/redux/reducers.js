import createReducer from 'app/common/lib/CreateReducer'

export const errors = createReducer({}, {
  ['global/SET_ERRORS'](state, action) {
    return action.errors
  }
})

export const signToken = createReducer({}, {
  ['global/SET_SIGN_USER'](state, action) {
    return {
      jwt: action.response.jwt,
      exp: action.response.exp
    }
  }
})

export const signUser = createReducer({}, {
  ['global/SET_SIGN_USER'](state, action) {
    return action.response.data.user
  }
})

export const isFinishedLoading = createReducer({}, {
  ['persist/REHYDRATE'](state, action) {
    return true
  }
})
