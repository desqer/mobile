import React, { Component } from 'react'
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native'

import SignBackground from 'app/scenes/sign/components/SignBackground'
import SignButton from 'app/scenes/sign/components/SignButton'
import SignInput from 'app/scenes/sign/components/SignInput'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
  }

  signUpPressed() {
    // this.props.navigator.replace({
    //   id: 'dashboard'
    // });
  }

  signPhonePressed() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <SignBackground>
        <SignInput
          placeholder='Qual seu nome?'
          autoCapitalize='words'
          icon='ios-person-outline'
          keyboardType='default'
          autoFocus
          ref={component => this._nameInput = component} />

        <SignInput
          placeholder='Digite sua senha'
          autoCapitalize='none'
          icon='ios-lock-outline'
          keyboardType='default'
          secureTextEntry
          ref={component => this._passwordInput = component} />

        <SignButton
          onPress={this.signUpPressed.bind(this)}>
          Criar conta grátis
        </SignButton>

        <View style={styles.afterSignView}>
          <TouchableHighlight
            underlayColor='rgba(0,0,0,0)'
            onPress={this.signPhonePressed.bind(this)}>
            <Text style={styles.afterSignText}>
              Já sou usuário
            </Text>
          </TouchableHighlight>
        </View>
      </SignBackground>
    )
  }
}

const styles = StyleSheet.create({
  afterSignView: {
    alignSelf: 'stretch'
  },

  afterSignText: {
    alignSelf: 'center',
    fontSize: 13,
    color: '#5A314F',
    marginTop: 20,
    fontWeight: 'bold'
  }
})
