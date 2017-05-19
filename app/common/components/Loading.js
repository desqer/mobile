import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <ActivityIndicator style={styles.loading} {...this.props} />
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    transform: [
      { scale: 0.6 } 
    ]
  }
});
