import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  ActivityIndicator
} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false }
  }

  buttonPressed() {
    this.setLoading(true)
  }

  setLoading(isLoading) {
    this.setState({loading: isLoading})
  }

  renderButtonContent() {
    if (this.state.loading === true) {
      return (
        <View>
          <ActivityIndicator color='#FFF' />
        </View>
      );
    } else {
      return (
        <View>
          <Text style={this.props.stylesText}>
            { this.props.children }
          </Text>
        </View>
      )
    }
  }

  render() {
    var TouchableElement = TouchableHighlight
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback
    }

    return (
      <View style={[]}>
        <TouchableElement {...this.props}>
          { this.renderButtonContent() }
        </TouchableElement>
      </View>
    )
  }
}
