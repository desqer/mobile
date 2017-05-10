import Api from 'app/common/lib/Api'

export function setErrors(response) {
  return {
    type: 'global/SET_ERRORS',
    response
  }
}

export function signIn({phone, password}) {
  return (dispatch, getState) => {
    return Api.post(`/sessions`, {
      user: {
        phone,
        password
      }
    }).then(response => {
      dispatch({
        type: 'global/SET_SIGN_USER',
        response
      })
    }).catch(response => {
      dispatch({
        type: 'global/SET_ERRORS',
        errors: response.data.errors
      })
    })
  }
}
