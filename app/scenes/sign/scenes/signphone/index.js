import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import SignBackground from 'app/scenes/sign/components/SignBackground'
import SignButton from 'app/scenes/sign/components/SignButton'
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
          <View style={styles.form}>
            <SignInput
              placeholder='Digite seu telefone'
              autoCapitalize='none'
              icon='ios-call-outline'
              keyboardType='numeric'
              autoFocus
              ref={component => this._textInput = component} />

            <SignButton
              onPress={this.signUpPressed.bind(this)}>
              Avançar
            </SignButton>
          </View>
      </SignBackground>
    )
  }
}

const styles = StyleSheet.create({
})
