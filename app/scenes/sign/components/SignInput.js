import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'

const SignInput = props => (
  <TextInput
    style={[styles.input, props.style]}
    {...props}>
  </TextInput>
)

SignInput.propTypes = {};

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#ccc',
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    paddingLeft: 20,
    fontSize: 12,
    color: '#666',
    marginTop: 15
  }
})

export default SignInput