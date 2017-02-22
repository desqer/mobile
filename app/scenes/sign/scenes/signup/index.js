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

import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

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
        <Input
          placeholder='Qual seu nome?'
          autoCapitalize='words'
          icon='ios-person-outline'
          keyboardType='default'
          ref={component => this._nameInput = component} />

        <Input
          placeholder='Digite sua senha'
          autoCapitalize='none'
          icon='ios-lock-outline'
          keyboardType='default'
          secureTextEntry
          ref={component => this._passwordInput = component} />

        <Button
          size="large"
          color="primary"
          onPress={this.signUpPressed.bind(this)}>
          Criar conta grátis
        </Button>

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
