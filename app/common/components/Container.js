import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          { this.props.children }
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
    flex: 1,
    paddingHorizontal: 20
  },
});
