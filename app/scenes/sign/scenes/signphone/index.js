import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

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
