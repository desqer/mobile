import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Touchable from 'app/common/components/Touchable.js'

export default class IconInput extends Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
  }

  focus() {
    this._textInput.focus();
  }

  render() {
    return (
      <View style={this.props.containerStyle}>
        <Touchable
          underlayColor="rgba(0, 0, 0, 0)"
          style={this.props.iconContainerStyle}
          onPress={this.focus}>

          <Icon
            name={this.props.icon}
            size={this.props.iconSize}
            color={this.props.iconColor}
            />
        </Touchable>
        <TextInput
          ref={input => this._textInput = input}
          style={this.props.inputStyle}
          {...this.props}
          />
      </View>
    );
  }
}
