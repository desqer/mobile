import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image
} from 'react-native'

export default class SignBackground extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Image
          style={styles.container}
          source={ require('app/scenes/sign/img/background.png') }>

        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={ require('app/scenes/sign/img/logo.png') } />
        </View>

        <View style={styles.form}>
          { this.props.children }
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },

  logo: {
    flex: 2,
    justifyContent: 'center'
  },

  logoImage: {
    width: 94,
    height: 162
  },

  form: {
    flex: 3,
    alignSelf: 'stretch'
  }
})
