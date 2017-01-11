import React, { Component } from 'react'
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import SignButton from 'app/scenes/sign/components/SignButton'
import SignInput from 'app/scenes/sign/components/SignInput'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
  }

  buttonPressed() {
    // Login action
    this._signinbutton.buttonPressed();
  }

  signUpPressed() {
    this.props.navigator.push({
      id: 'sign.signup'
    });
  }

  render() {
    return (
      <Image
        style={styles.container}
        source={ require('app/scenes/sign/img/background.png') }>

          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={ require('app/scenes/sign/img/logo.png') } />
          </View>

          <View style={styles.form}>
            <Icon name="ios-call-outline" size={30} color="#666" />

            <SignInput
              placeholder="Digite seu e-mail"
              autoCapitalize='none'
              keyboardType='email-address' />

            <SignInput
              placeholder="Digite sua senha"
              secureTextEntry={true} />

            <SignButton
              ref={component => this._signinbutton = component}
              onPress={this.buttonPressed.bind(this)}>
              Entrar
            </SignButton>

            <View style={styles.afterSignView}>
              <TouchableHighlight
                underlayColor='rgba(0,0,0,0)'
                onPress={this.signUpPressed.bind(this)}>
                <Text style={styles.alterSignText}>
                  Crie sua conta
                </Text>
              </TouchableHighlight>
            </View>
          </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20
  },

  logo: {
    flex: 2,
    justifyContent: 'center'
  },

  logoImage: {
    width: 94,
    height: 162
  },

  form: {
    flex: 3,
    flexDirection: 'column',
    alignSelf: 'stretch'
  },

  afterSignView: {
    alignSelf: 'stretch'
  },

  alterSignText: {
    alignSelf: 'center',
    fontSize: 13,
    color: '#5A314F',
    marginTop: 20,
    fontWeight: "bold"
  }
})
