import React, { Component } from 'react'
import {
  StyleSheet,
  View
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
    signToken: state.signToken,
    signUser: state.signUser
  }
}

@connect(mapStateToProps, (dispatch) => bindActionCreators(Actions, dispatch))
export default class SignPhone extends Component {
  constructor(props) {
    super(props)


    this.state = {
      phone: '',
      loading: false
    };
  }

  signPhonePressed() {
    this.setState({ loading: true })

    this.props.fetchUserByPhone(`55${this.state.phone}`).then(() => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <SignBackground>
        <View>
          <Input
            name='phone'
            placeholderText='Qual o nº do seu celular?'
            placeholderFocusText='(11) 96123-4567'
            icon='ios-call-outline'
            keyboardType='numeric'
            ref={component => this._signPhoneInput = component}
            onChangeText={(phone) => this.setState({phone})}
          />
          <Button
            size="large"
            color="primary"
            loading={this.state.loading}
            onPress={this.signPhonePressed.bind(this)}
          >
            Avançar
          </Button>
        </View>
      </SignBackground>
    )
  }
}
