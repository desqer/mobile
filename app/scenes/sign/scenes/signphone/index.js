import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'
import SignInput from 'app/scenes/sign/components/SignInput'

export default class SignPhone extends Component {
  constructor(props) {
    super(props)
  }

  signUpPressed() {
    this.props.navigator.push({
      id: 'sign.signin'
    });
  }

  render() {
    return (
      <SignBackground>
          <View>
            <SignInput
              placeholder='Digite seu telefone'
              autoCapitalize='none'
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
