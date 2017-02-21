import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import variables from 'app/common/stylesheet/Variables'

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.button,
          (this.props.size) ? styles['button-size-' + this.props.size] : {},
          (this.props.type) ? styles['button-type-' + this.props.type] : {},
          (this.props.color) ? styles['button-color-' + this.props.color] : {},
          this.props.style
        ]}
        {...this.props}>
        <View>
          <Text style={styles.buttonText}>
            { this.props.children }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: '#333'
  },

  'button-size-large': {
    height: 50
  },

  'button-size-small': {
    height: 28
  },

  'button-color-primary': {
    backgroundColor: variables.colors.primary,
  },

  'button-color-secundary': {
    backgroundColor: variables.colors.secundary,
  },

  'button-color-success': {
    backgroundColor: variables.colors.success,
  },

  'button-color-danger': {
    backgroundColor: variables.colors.danger,
  },

  buttonText: {
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  }
})
