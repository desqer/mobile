import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation'
import { ActionCreators } from 'app/redux/actions'
import { store } from './store'

/**
 * Global
 */
import Header from 'app/scenes/calendar/components/Header'
import Splash from 'app/common/components/Splash'

import SignPhone from 'app/scenes/sign/scenes/signphone'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'
import Calendar from 'app/scenes/calendar'
import Detail from 'app/scenes/calendar/scenes/detail'
import New from 'app/scenes/calendar/scenes/new'

export const AuthRoutes = StackNavigator({
  SignPhone: { screen: SignPhone },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn }
}, {
  headerMode: 'none',
  initialRouteName: 'SignPhone'
});

export const Routes = StackNavigator({
  Calendar: { screen: Calendar }
}, {
  headerMode: 'screen',
  initialRouteName: 'Calendar',
  navigationOptions: {
    header: ({ state }) => ({
      left: Header.left(state),
      right: Header.right(state),
      style: {
        backgroundColor: '#FFF',
        shadowColor: "#ddd",
        shadowOpacity: 1,
        shadowRadius: 10,
        paddingTop: 25,
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderBottomWidth: 0,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }
    })
  }
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
