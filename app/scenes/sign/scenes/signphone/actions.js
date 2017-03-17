import * as types from './types'

import Api from 'app/common/lib/Api'

export function fetchUserByPhone(phoneNumber) {
  return (dispatch, getState) => {
    return Api.get(`/users/${phoneNumber}`).then(resp => {
      console.log(resp)
    }).catch( (ex) => {
      console.log(ex)
    })

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
