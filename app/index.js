import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, ReduxRouter } from './store'
import scenes from './routes'

export default class Desqer extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter scenes={scenes} />
      </Provider>
    )
  }
}
