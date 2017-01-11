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
        underlayColor='#BE446D'
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
    height: 50,
    backgroundColor: '#BE446D',
    marginTop: 15,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 3
  },

  buttonText: {
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  }
})
