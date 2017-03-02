import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { connect } from 'react-redux'

import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

class SignPhone extends Component {
  signUpPressed() {
    this.props.fetchUserByPhone('96523842')
  }

  render() {
    return (
      <SignBackground>
          <View>
            <Text style={{marginTop: 20}}>
                Logged: { this.props.signUser.name ? this.props.signUser.name : 'not logged' }
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

function mapStateToProps(state) {
  return {
    signUser: state.signUser
  };
}

export default connect(mapStateToProps)(SignPhone)
