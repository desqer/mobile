import React, { Component } from 'react'
import { Navigator } from 'react-native'

import SignIn from 'app/scenes/sign/scenes/signin'
import SignUp from 'app/scenes/sign/scenes/signup'

export default class Desqer extends Component {
  navigatorRoutes(route, navigator) {
    switch (route.id) {
      case 'sign.signin':
        return <SignIn navigator={navigator} title="sign.signin" />
      case 'sign.signup':
        return <SignUp navigator={navigator} title="sign.signup" />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'sign.signin'}}
        renderScene={this.navigatorRoutes} />
    )
  }
}
