import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'

const SignInput = props => (
  <TextInput
    style={[styles.input, props.style]}
    placeholderTextColor="#666"
    {...props}>
  </TextInput>
)

SignInput.propTypes = {};

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingLeft: 20,
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    fontFamily: 'Helvetica'
  }
})

export default SignInput
