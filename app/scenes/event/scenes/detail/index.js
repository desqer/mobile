import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Footer from 'app/common/components/Footer'

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  contentContainer: {
    flex: 1
  },
});
