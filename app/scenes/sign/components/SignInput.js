import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import IconInput from 'app/common/components/IconInput.js'

export default class SignInput extends Component {
  render(){
    return (
      <IconInput
        containerStyle={styles.inputContainer}
        iconContainerStyle={styles.icon}
        inputStyle={[styles.input, this.props.style]}
        icon={this.props.icon}
        iconSize={20}
        iconColor="#666"
        placeholderTextColor="#666"
        {...this.props}
        />
    )
  }
}

SignInput.propTypes = {};

const styles = StyleSheet.create({
  inputContainer: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row'
  },

  icon: {
    alignSelf: 'center',
    paddingRight: 20
  },

  input: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Helvetica',
    flex: 1
  }
})
