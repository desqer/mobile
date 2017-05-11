import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="white" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5486C',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
