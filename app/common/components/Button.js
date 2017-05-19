import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import DText from 'app/common/components/DText'
import Loading from 'app/common/components/Loading'
import Variables from 'app/common/stylesheet/Variables'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  renderLoadingContent() {
    return <Loading color="white" size={1} />
  }

  renderButtonContent() {
    let icon = null;
    if (this.props.icon) {
      icon = (
        <Icon
          style={[styles.icon, this.props.iconStyle]}
          name={this.props.icon}
          size={this.props.iconSize || 20}
          color={this.props.iconColor || '#FFF'}
        />
      )
    }

    return (
      <View style={styles.buttonContent}>
        { icon }
        <DText style={[
            styles.buttonText,
            (this.props.size) ? styles['text-size-' + this.props.size] : {}
          ]}>
          { this.props.children }
        </DText>
      </View>
    )
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        {...this.props}
        style={[
          styles.button,
          (this.props.size) ? styles['button-size-' + this.props.size] : {},
          (this.props.type) ? styles['button-type-' + this.props.type] : {},
          (this.props.color) ? styles['button-color-' + this.props.color] : {},
          this.props.style
        ]}>
        { this.props.loading ? this.renderLoadingContent() : this.renderButtonContent() }
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  color: React.PropTypes.string
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
    height: 28,
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
    marginRight: 10,
    marginTop: 2,
    alignSelf: 'center'
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'center'
  },

  'text-size-small': {
    fontSize: 12
  }
})
