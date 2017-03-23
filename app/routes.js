import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { ActionCreators } from 'app/redux/actions'

/**
 * Global
 */
import Header from 'app/scenes/calendar/components/Header'

import SignPhone from 'app/scenes/sign/scenes/signphone'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'
import Calendar from 'app/scenes/calendar'
import Detail from 'app/scenes/calendar/scenes/detail'
import New from 'app/scenes/calendar/scenes/new'

export const Routes = StackNavigator({
  SignPhone: {
    screen: SignPhone,
    navigationOptions: {
      header: { visible: false }
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: { visible: false }
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: { visible: false }
    }
  }
}, {
  headerMode: 'screen',
  initialRouteName: 'SignPhone',
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
});

class Router extends Component {
  render() {
    return (
      <Routes
        teste={true}
        screenProps = {{
          ...bindActionCreators(ActionCreators, this.props.dispatch)
        }}
        navigation={
          addNavigationHelpers({
            state: this.props.nav,
            dispatch: this.props.dispatch
          })
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  }
}

export default connect(
  mapStateToProps
)(Router)
