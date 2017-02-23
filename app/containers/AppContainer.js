import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from 'app/redux/actions'

/**
 * Scene components
 */
import Calendar from 'app/scenes/calendar'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'
import Detail from 'app/scenes/event/scenes/detail'
import SignPhone from 'app/scenes/sign/scenes/signphone'

/**
 * Common components
 */
import Footer from 'app/common/components/Footer'

class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

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
      <Router>
        <Scene key="root">
          <Scene key="sign.signphone" component={SignPhone} title="Entrar" initial={true} />
        </Scene>
      </Router>
      //
      // <Navigator
      //   ref='navigator'
      //   configureScene={this.navigatorTransitions}
      //   initialRoute={{id: 'sign.signphone'}}
      //   renderScene={this.navigatorRoutes}
      //   onDidFocus={(route) => {
      //     if (route.reset) {
      //       this.refs.navigator.immediatelyResetRouteStack([{ id: route.id }])
      //     }
      //   }}
      //   />
    )
  }
}

const styles = StyleSheet.create({
  wrapContainer: {
    flex: 1
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer)
