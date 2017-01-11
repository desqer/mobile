import React, { Component } from 'react'
import {
  StyleSheet,
  Animated,
  Easing
} from 'react-native'

import Button from 'app/common/components/Button'

export default class SignButton extends Component {
  constructor(props) {
    super(props)
  }

  buttonPressed() {
   this._button.buttonPressed()
  }

  render() {
    return (
      <Button
        ref={component => this._button = component}
        underlayColor='#016FC6'
        style={[styles.button, this.props.style]}
        stylesText={styles.buttonText}
        {...this.props}>

        { this.props.children }
      </Button>
    );
  }
}

SignButton.propTypes = {}

const styles = StyleSheet.create({
  button: {
    height: 42,
    backgroundColor: '#008EFF',
    marginTop: 25,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 25
  },

  buttonText: {
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  }
})
