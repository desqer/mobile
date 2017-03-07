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

export default class IconInput extends Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
  }

  focus() {
    this._textInput.focus();
  }

  render() {

    /**
    * Render icon
    */
    let icon = null;
    if (this.props.icon) {
      icon = (
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.icon, this.props.iconContainerStyle]}
          onPress={this.focus}>

          <Icon
            name={this.props.icon}
            size={this.props.iconSize || 18}
            color={this.props.iconColor || '#666'}
            />
        </TouchableOpacity>
      )
    }

    /**
    * Render optional
    */
    let optional = null;
    if (this.props.optional === true) {
      optional = <DText style={styles.optional}>opcional</DText>
    }

    return (
      <View style={[
          styles.inputContainer,
          this.props.containerStyle,
          (this.props.shadow) ? styles.inputContainerShadow : {}
        ]}>
        { icon }
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          ref={input => this._textInput = input}
          style={[styles.input, this.props.inputStyle]}
          placeholderTextColor="#666"
          {...this.props}
          />
        { optional }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginTop: 10,
    flexDirection: 'row'
  },

  inputContainerShadow: {
    shadowColor: "#BBB",
    shadowOpacity: 0.5,
    shadowRadius: 8,
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
