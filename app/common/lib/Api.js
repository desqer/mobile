import Device from 'react-native-device-info'

export default class Api {
  static headers() {
    return {
      'Accept-Locale': Device.getDeviceLocale(),
      'Accept':        'application/json',
      'Content-Type':  'application/json',
      'dataType':      'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://api.desqer.com'
    const url = `${host}${route}`

    let options = Object.assign({
      method: verb
    }, params ? {
      body: JSON.stringify(params)
    } : null);

    options.headers = Api.headers()
    return fetch(url, options).then(resp => {
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
