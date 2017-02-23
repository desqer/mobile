import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

export default class SignPhone extends Component {
  signUpPressed() {
    this.props.fetchUserByPhone('96523842')
    console.log(this.props)
  }

  signUser() {
    return this.props.signUser ? this.props.signUser.name : 'no'
  }

  render() {
    return (
      <SignBackground>
          <View>
            <Text style={{marginTop: 20}}>
                { this.signUser() }
            </Text>

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
