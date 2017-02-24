import * as types from './types'

export function fetchUserByPhone(phoneNumber) {
  return (dispatch, getState) => {
    dispatch(setUser({
      user: {
        id: 1,
        name: 'Diego',
      }
    }))
  }
}

export function setUser({ user }) {
  return {
    type: types.SET_USER,
    user
  }
}

export function signPhone() {
  return {
    type: types.ON_SIGN_PHONE,
  }
}
