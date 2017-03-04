import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'

import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

class SignPhone extends Component {
  signUpPressed() {
    this.props.fetchUserByPhone('96523842')
    Actions.signUp({ type: ActionConst.REPLACE })
  }

  render() {
    return (
      <SignBackground>
          <View>
            <Input
              placeholder='Digite seu telefone'
              autoCapitalize='none'
              icon='ios-call-outline'
              keyboardType='numeric'
              ref={component => this._textInput = component} />

            <Button
              size="large"
              color="primary"
              onPress={this.signUpPressed.bind(this)}>
              Avançar
            </Button>
          </View>
      </SignBackground>
    )
  }
}

function mapStateToProps(state) {
  return {
    signUser: state.signUser
  };
}

export default connect(mapStateToProps)(SignPhone)
