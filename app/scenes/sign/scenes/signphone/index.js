import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'

import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

class SignPhone extends Component {
  signUpPressed() {
    this.props.fetchUserByPhone('96523842')
  }

  componentDidMount() {
    console.log(this.state, this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
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

export default connect(state => state, (dispatch) => bindActionCreators(actions, dispatch))(SignPhone)
