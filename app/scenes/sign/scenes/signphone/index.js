import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Input from 'app/common/components/Input'
import Button from 'app/common/components/Button'
import SignBackground from 'app/scenes/sign/components/SignBackground'

import * as SignPhoneActions from 'app/scenes/sign/scenes/signphone/actions'

function mapStateToProps(state) {
  return {
    signUser: state.signUser
  }
}

@connect(mapStateToProps, (dispatch) => bindActionCreators(SignPhoneActions, dispatch))
export default class SignPhone extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phone: '',
      loading: false
    };
  }

  signPhonePressed() {
    if (this.state.phone) {
      this.setState(() => { return { loading: true } })

      this.props.fetchUserByPhone(this.state.phone).then(() => {
        this.setState(() => { return { loading: false } })

        this.props.navigation.navigate('SignUp')
      })
    } else {
      this._signPhoneInput.focus()
    }
  }

  render() {
    return (
      <SignBackground>
        <View>
          <Input
            placeholderText='Qual o nº do seu celular?'
            placeholderFocusText='(11) 96123-4567'
            icon='ios-call-outline'
            keyboardType='numeric'
            ref={component => this._signPhoneInput = component}
            onChangeText={(phone) => this.setState({phone})}
            required={true}
          />

          <Button
            loading={this.state.loading}
            size="large"
            color="primary"
            onPress={this.signPhonePressed.bind(this)}
          >
            Avançar
          </Button>
        </View>
      </SignBackground>
    )
  }
}
