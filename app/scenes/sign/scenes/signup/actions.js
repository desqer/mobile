import Api from 'app/common/lib/Api'

export function signUp({phone, name, password}) {
  return (dispatch, getState) => {
    return Api.post(`/users`, {
      user: {
        phone,
        name,
        password
      }
    }).then(resp => {
      return {
        phone,
        password
      }
    }).catch(response => {
      dispatch({
        type: 'global/SET_ERRORS',
        errors: response.data.errors
      })
    })
  }
}
