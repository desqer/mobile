import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Footer from 'app/common/components/Footer'
import DText from 'app/common/components/DText'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Wrap extends Component {
  render() {
    return (
      <View style={styles.container}>
        { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingTop: 65,
    flex: 1
  },
});
