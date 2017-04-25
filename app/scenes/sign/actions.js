import Api from 'app/common/lib/Api'

export function signIn({phone, password}) {
  return (dispatch, getState) => {
    return Api.post(`/sessions`).then(resp => {
      
    }).catch(response => {
      dispatch({
        type: 'global/SET_ERRORS',
        errors: response.data.errors
      })
    })
  }
}
