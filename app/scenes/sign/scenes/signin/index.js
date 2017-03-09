import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native'

import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'

import DText from 'app/common/components/DText'
import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

class SignIn extends Component {
  constructor(props) {
    super(props)
  }

  signUpPressed() {
      Actions.app({ type: ActionConst.RESET })
      Actions.appointments()
      Actions.calendarIndex()
  }

  notMePressed() {
    Actions.signUp({ type: ActionConst.REPLACE })
  }

  forgotPasswordPressed() {
    //TODO: Create forgot password page
  }

  render() {
    return (
      <SignBackground>
        <View style={styles.userContainer}>
          <Image
            style={styles.userAvatar}
            source={{uri: 'https://tinyfac.es/data/avatars/5F8C5D50-DDB6-4F06-AA15-ACB30D8D910D-500w.jpeg'}}
            />

          <View style={styles.userInfo}>
            <DText
              style={styles.userName}>
              Bem-vindo, Diego
            </DText>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this.notMePressed.bind(this)}>
              <DText style={styles.notMeLink}>
                este não sou eu
              </DText>
            </TouchableOpacity>
          </View>
        </View>

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
          Entrar
        </Button>

        <View style={styles.afterSignView}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this.forgotPasswordPressed.bind(this)}>
            <DText style={styles.afterSignText}>
              Esqueci minha senha
            </DText>
          </TouchableOpacity>
        </View>
      </SignBackground>
    )
  }
}

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 20,
    marginTop: 10,
    flexDirection: 'row'
  },

  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  userInfo: {
    marginLeft: 15,
    alignSelf: 'center'
  },

  userName: {
    fontWeight: '700',
    color: '#666',
    fontSize: 14
  },

  notMeLink: {
    color: '#E7826A',
    fontSize: 13,
    marginTop: 5
  },

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

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(SignIn)
