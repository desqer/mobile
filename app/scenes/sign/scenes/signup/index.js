import React, { Component } from 'react'
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import SignButton from 'app/scenes/sign/components/SignButton'
import SignInput from 'app/scenes/sign/components/SignInput'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
  }

  buttonPressed() {
    // Login action
    this._signupbutton.buttonPressed();
  }

  signInPressed() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logoText}>DESQER</Text>
        </View>

        <View style={styles.form}>
          <SignInput placeholder="Digite seu nome" />
          <SignInput
            placeholder="Digite seu e-mail"
            autoCapitalize='none'
            keyboardType='email-address' />

          <SignInput
            placeholder="Digite sua senha"
            secureTextEntry={true} />

          <SignButton
            ref={component => this._signupbutton = component}
            onPress={this.buttonPressed.bind(this)}>
            Criar conta grátis
          </SignButton>

          <View style={styles.afterSignView}>
            <TouchableHighlight
              underlayColor='rgba(0,0,0,0)'
              onPress={this.signInPressed.bind(this)}>
              <Text style={styles.alterSignText}>
                Já possui uma conta?
                <Text style={{fontWeight: "bold"}}> Faça login</Text>
              </Text>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 40
  },

  logo: {
    flex: 2,
    justifyContent: 'center'
  },

  logoText: {
    fontSize: 36,
    fontWeight: 'bold'
  },

  form: {
    flex: 4,
    flexDirection: 'column',
    alignSelf: 'stretch'
  },

  afterSignView: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignSelf: 'stretch',
    marginTop: 20
  },

  alterSignText: {
    alignSelf: 'center',
    fontSize: 13,
    color: '#666666',
    marginTop: 20
  }
})
