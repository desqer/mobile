import Api from 'app/common/lib/Api'

export function fetchUserByPhone(phoneNumber) {
  return (dispatch, getState) => {
    return Api.get(`/users/${phoneNumber}`).then(response => {
      dispatch({
        type: 'Navigation/NAVIGATE',
        routeName: 'SignIn',
        params: {
          user: response.data.user
        }
      })
    }).catch(response => {
      if (response.code === 404) {
        dispatch({
          type: 'Navigation/NAVIGATE',
          routeName: 'SignUp',
          params: {
            phone: phoneNumber
          }
        })
      } else {
        dispatch({
          type: 'global/SET_ERRORS',
          errors: response.data.errors
        })
      }
    })
  }
}
