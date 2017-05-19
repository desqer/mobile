import Device from 'react-native-device-info'
import { connect } from 'react-redux'

@connect((state) => { return { signToken: state.signToken }})
export default class Api {
  static headers() {
    return {
      'Accept-Locale': Device.getDeviceLocale(),
      'Accept':        'application/json',
      'Content-Type':  'application/json',
      'dataType':      'json',
    }
  }

  static get(route, token) {
    return this.xhr(route, null, token, 'GET');
  }

  static put(route, params, token) {
    return this.xhr(route, params, token, 'PUT')
  }

  static post(route, params, token) {
    return this.xhr(route, params, token, 'POST')
  }

  static delete(route, params, token) {
    return this.xhr(route, params, token, 'DELETE')
  }

  static xhr(route, params, token, verb) {
    const host = 'http://127.0.0.1:4000'
    const url = `${host}${route}`

    let options = Object.assign({
      method: verb
    }, params ? {
      body: JSON.stringify(params)
    } : null);

    options.headers = token ? Object.assign({}, Api.headers(), {
      'Authorization': `Bearer ${token}`
    }) : Api.headers()

    return fetch(url, options).then(resp => {
      console.log('Request to:', url, 'Response: ', resp)

      let json = resp.json()
      if (resp.ok) {
        return json
      }
      return json.then(err => {
        throw {
          code: resp.status,
          data: err
        }
      });
    }).then(json => {
      return json
    });
  }
}
