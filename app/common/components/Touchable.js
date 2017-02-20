import React, { Component } from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} from 'react-native';

export default class Touchable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var TouchableElement = TouchableHighlight
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback
    }

    return (
      <TouchableElement
        underlayColor="rgba(0, 0, 0, 0)"
        activeOpacity={0.5}
        {...this.props}>
        <View>
          { this.props.children }
        </View>
      </TouchableElement>
    )
  }
}
