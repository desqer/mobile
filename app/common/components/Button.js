import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import DText from 'app/common/components/DText'
import Variables from 'app/common/stylesheet/Variables'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /**
     * Render icon
     */
    let icon = null;
    if (this.props.icon) {
      icon = (
        <Icon
          style={[styles.icon, this.props.iconStyle]}
          name={this.props.icon}
          size={this.props.iconSize || 16}
          color={this.props.iconColor || '#FFF'}
          />
      )
    }

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
        <View style={styles.buttonContent}>
          { icon }
          <DText style={styles.buttonText}>
            { this.props.children }
          </DText>
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
    backgroundColor: Variables.colors.primary,
  },

  'button-color-secundary': {
    backgroundColor: Variables.colors.secundary,
  },

  'button-color-success': {
    backgroundColor: Variables.colors.success,
  },

  'button-color-danger': {
    backgroundColor: Variables.colors.danger,
  },

  icon: {
    marginRight: 10
  },

  buttonContent: {
    alignSelf: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  }
})
