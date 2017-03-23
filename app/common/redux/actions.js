import * as types from './types'

export function setErrors({ errors }) {
  return {
    type: types.SET_ERRORS,
    errors
  }
}
