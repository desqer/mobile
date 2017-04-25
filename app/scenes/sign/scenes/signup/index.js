import React, { Component } from 'react'
import {
  Platform,
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as Actions from './actions'

import DText from 'app/common/components/DText'
import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

function mapStateToProps(state) {
  return {
  }
}

@connect(mapStateToProps, (dispatch) => bindActionCreators(Actions, dispatch))
export default class SignUp extends Component {
  constructor(props) {
    super(props)

    let phone = this.props.navigation.state.params.phone

    this.state = {
      phone
    }
  }
  signUpPressed() {
    this.setState({ loading: true })

    this.props.signUp({phone, name, password} = this.state).then((resp) => {
      this.props.screenProps.signIn({phone, password} = resp).then(() => {
        this.setState({ loading: false })
      });
    })
  }

  signPhonePressed() {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <SignBackground>
        <Input
          name='name'
          placeholder='Qual seu nome?'
          autoCapitalize='words'
          icon='ios-person-outline'
          keyboardType='default'
          ref={component => this._nameInput = component}
          onChangeText={(name) => this.setState({name})} />

        <Input
          name='password'
          placeholder='Digite sua senha'
          autoCapitalize='none'
          icon='ios-lock-outline'
          keyboardType='default'
          secureTextEntry
          ref={component => this._passwordInput = component}
          onChangeText={(password) => this.setState({password})} />

        <Button
          size="large"
          color="primary"
          loading={this.state.loading}
          onPress={this.signUpPressed.bind(this)}
        >
          Criar conta grátis
        </Button>

        <View style={styles.afterSignView}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this.signPhonePressed.bind(this)}>
            <DText style={styles.afterSignText}>
              Já sou usuário
            </DText>
          </TouchableOpacity>
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
