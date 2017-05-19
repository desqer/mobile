import Api from 'app/common/lib/Api'

export function fetchAppointments() {
  return (dispatch, getState) => {
    return Api.get(`/appointments`, getState().signToken.jwt)
  }
}

export function approveAppointment(appointmentId) {
  return (dispatch, getState) => {
    return Api.put(`/appointments/${appointmentId}`, {
      appointment: {
        status: 'active'
      }
    }, getState().signToken.jwt)
  }
}

export function cancelAppointment(appointmentId) {
  return (dispatch, getState) => {
    return Api.put(`/appointments/${appointmentId}`, {
      appointment: {
        status: 'canceled'
      }
    }, getState().signToken.jwt)
  }
}
