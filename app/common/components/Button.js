import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

import Touchable from 'app/common/components/Touchable.js'

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[{alignSelf: 'stretch'}]}>
        <Touchable {...this.props}>
          <View>
            <Text style={this.props.stylesText}>
              { this.props.children }
            </Text>
          </View>
        </Touchable>
      </View>
    )
  }
}
