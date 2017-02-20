import React, { Component } from 'react'
import { Navigator, View, StyleSheet } from 'react-native'

import SignPhone from 'app/scenes/sign/scenes/signphone'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'
import Calendar from 'app/scenes/calendar'
import Detail from 'app/scenes/event/scenes/detail'

import Footer from 'app/common/components/Footer'

export default class Desqer extends Component {
  navigatorRoutes(route, navigator) {
    this._navigator = navigator

    switch (route.id) {
      case 'sign.signphone':
        return <SignPhone navigator={navigator} title="sign.signphone" />
      case 'sign.signup':
        return <SignUp navigator={navigator} title="sign.signup" />
      case 'sign.signin':
        return <SignIn navigator={navigator} title="sign.signin" />
      case 'calendar':
        return <View style={styles.wrapContainer}><Calendar navigator={navigator} title="calendar" /><Footer /></View>
      case 'event.detail':
        return <View style={styles.wrapContainer}><Detail navigator={navigator} title="event.detail" /><Footer /></View>
    }
  }

  navigatorTransitions(route) {
    switch (route.id) {
      case 'calendar':
        return Navigator.SceneConfigs.FloatFromBottom
      default:
        return Navigator.SceneConfigs.PushFromRight
    }
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        configureScene={this.navigatorTransitions}
        initialRoute={{id: 'sign.signin'}}
        renderScene={this.navigatorRoutes}
        onDidFocus={(route) => {
          if (route.reset) {
            this.refs.navigator.immediatelyResetRouteStack([{ id: route.id }])
          }
        }}
        />
    )
  }
}

const styles = StyleSheet.create({
  wrapContainer: {
    flex: 1
  }
});
