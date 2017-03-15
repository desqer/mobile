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

  leftContainer() {
    let icon = null;
    if (this.props.icon) {
      icon = (
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.icon, this.props.iconContainerStyle]}
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
    let optional = null;
    if (this.props.optional === true) {
      optional = <DText style={styles.optional}>opcional</DText>
    }

    return optional
  }

  render() {
    return (
      <View style={[
          styles.inputContainer,
          this.props.containerStyle,
          (this.props.shadow) ? styles['inputContainer-shadow'] : {},
          (this.props.multiline) ? styles['inputContainer-multiline'] : {}
        ]}>
        { this.leftContainer() }
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          ref={input => this._textInput = input}
          style={[styles.input, this.props.inputStyle]}
          placeholder={this.state.placeholder.text}
          placeholderTextColor={this.state.placeholder.color}
          onFocus={() => this.setPlaceholderText()}
          onBlur={() => this.setPlaceholderText(true)}
          {...this.props}
          />
        { this.rightContainer() }
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

  icon: {
    alignSelf: 'center',
    paddingLeft: 20
  },

  optional: {
    alignSelf: 'center',
    paddingRight: 20,
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
