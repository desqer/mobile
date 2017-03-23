import React, { Component } from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import DText from 'app/common/components/DText'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      validationPassed: false,
      placeholder: this.defaultPlaceholder = {
        text:  'Qual o nº do seu celular?',
        color: '#666'
      }
    }
  }

  focus() {
    this._textInput.focus();
  }

  setPlaceholderText(setToDefault = false) {
    this.setState(() => {
      return {
        placeholder: (setToDefault)
          ? this.defaultPlaceholder
          : {
            text: this.props.placeholderFocusText || this.defaultPlaceholder.text,
            color: '#999'
          }
      }
    })
  }

  validateInput(text) {
    if (this.props.required && !text.length) {
      return this.setState(() => {
        return { validationPassed: false }
      })
    }

    if (this.props.requiredRegex && !this.props.requiredRegex.test(text)) {
      return this.setState(() => {
        return { validationPassed: false }
      })
    }

    return this.setState(() => {
      return { validationPassed: true }
    })
  }

  leftContainer() {
    let icon = null;
    if (this.props.icon) {
      icon = (
        <TouchableOpacity
          activeOpacity={1}
          style={[this.props.iconContainerStyle]}
          onPress={this.focus.bind(this)}>

          <Icon
            name={this.props.icon}
            size={this.props.iconSize || 18}
            color={this.props.iconColor || '#666'}
            />
        </TouchableOpacity>
      )
    }

    return icon
  }

  rightContainer() {
    let rightContainer;
    if (this.props.hasOwnProperty('required')) {
      if (this.props.required === false) {
        rightContainer = <DText style={styles.optional}>opcional</DText>
      } else {
        if (this.state.validationPassed === true) {
          rightContainer = <Icon name="ios-checkmark" size={32} color="#666" />
        }
      }
    }

    return rightContainer
  }

  render() {
    return (
      <View style={[
        styles.inputContainer,
        this.props.containerStyle,
        (this.props.shadow) ? styles['inputContainer-shadow'] : {},
        (this.props.multiline) ? styles['inputContainer-multiline'] : {}
      ]}>
        <View style={styles.leftContainer}>
          { this.leftContainer() }
        </View>
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          ref={input => this._textInput = input}
          placeholder={this.state.placeholder.text}
          placeholderTextColor={this.state.placeholder.color}

          {...this.props}
          style={[styles.input, this.props.style]}
          onChangeText={(text) => {
            this.validateInput(text);
            (this.props.onChangeText) ? this.props.onChangeText(text) : null
          }}
          style={[styles.input, this.props.style]}
          onBlur={() => {
            this.setPlaceholderText(true);
            (this.props.onBlur) ? this.props.onBlur() : null
          }}
          onFocus={() => {
            this.setPlaceholderText();
            (this.props.onFocus) ? this.props.onFocus() : null
          }}
        />
        <View style={styles.rightContainer}>
          { this.rightContainer() }
        </View>
      </View>
    );
  }
}

Input.propTypes = {
  icon: React.PropTypes.string,
  shadow: React.PropTypes.bool,
  optional: React.PropTypes.bool,
  multiline: React.PropTypes.bool,
  placeholderText: React.PropTypes.string,
  placeholderFocusText: React.PropTypes.string
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginTop: 10,
    flexDirection: 'row'
  },

  'inputContainer-shadow': {
    shadowColor: "#BBB",
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },

  'inputContainer-multiline': {
    height: 120,
    paddingVertical: 10
  },

  leftContainer: {
    alignSelf: 'center',
    paddingLeft: 20
  },

  rightContainer: {
    alignSelf: 'center',
    paddingRight: 20
  },

  optional: {
    fontSize: 11,
    color: '#999'
  },

  input: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Helvetica',
    flex: 1,
    paddingHorizontal: 20
  }
})
