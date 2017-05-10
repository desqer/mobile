import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native'

import { connect } from 'react-redux'

import DText from 'app/common/components/DText'
import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

@connect((state) => { return {} })
export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.navigation.state.params.user
    }
  }

  signUpPressed() {
    this.setState({ loading: true })

    this.props.screenProps.signIn({phone: this.state.user.phone, password: this.state.password})
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  notMePressed() {
    this.props.navigation.goBack()
  }

  forgotPasswordPressed() {
    //TODO: Create forgot password page
  }

  render() {
    return (
      <SignBackground>
        <View style={styles.userContainer}>
          <View style={styles.userInfo}>
            <DText
              style={styles.userName}>
              Bem-vindo, { this.state.user.name }
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
          onChangeText={(password) => this.setState({password})} />

        <Button
          size="large"
          color="primary"
          loading={this.state.loading}
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
