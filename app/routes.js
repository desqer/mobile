import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  StackNavigator,
  TabNavigator,
  addNavigationHelpers,
  NavigationActions
} from 'react-navigation'

import { ActionCreators } from 'app/redux/actions'
import { store } from './store'

/**
 * Global
 */
import Header from 'app/scenes/calendar/components/Header'
import Splash from 'app/common/components/Splash'
import Footer from 'app/common/components/Footer'

import SignPhone from 'app/scenes/sign/scenes/signphone'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'
import Calendar from 'app/scenes/calendar'
import Detail from 'app/scenes/calendar/scenes/detail'
import New from 'app/scenes/calendar/scenes/new'

const headerProps = {
  headerMode: 'float',
  initialRouteName: 'Calendar',
  navigationOptions: {
    header: props => <Header {...props} />
  }
};

export const AuthRoutes = StackNavigator({
  SignPhone: { screen: SignPhone },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn }
}, {
  headerMode: 'none',
  initialRouteName: 'SignPhone'
});

export const Routes = TabNavigator({
  Profile: { screen: StackNavigator({
    Calendar: { screen: Calendar }
  }, headerProps)},
  Appointments: { screen: StackNavigator({
    Calendar: { screen: Calendar }
  }, headerProps)},
  History: { screen: StackNavigator({
    Calendar: { screen: Calendar }
  }, headerProps)}
}, {
  initialRouteName: 'Appointments',
  tabBarComponent:  props => <Footer {...props} />,
  swipeEnabled: true,
  backBehavior: 'initialRoute'
})

class Router extends Component {
  render() {
    const { isFinishedLoading } = this.props

    if (!isFinishedLoading) {
      return <Splash />
    } else {

      var RouterComponent = AuthRoutes;
      var navReducer = this.props.authNav;

      if (this.props.signUser) {
        RouterComponent = Routes;
        navReducer = this.props.nav;
      }

      return (
        <RouterComponent
          screenProps = {{
            ...bindActionCreators(ActionCreators, this.props.dispatch)
          }}
          navigation={
            addNavigationHelpers({
              state: navReducer,
              dispatch: this.props.dispatch
            })
          }
        />
      )
    }
  }
}

export default connect((state) => {
  return {
    nav: state.nav,
    authNav: state.authNav,
    signUser: state.signUser,
    isFinishedLoading: state.isFinishedLoading,
  }
})(Router)
