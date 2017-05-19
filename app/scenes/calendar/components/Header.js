import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'

import { connect } from 'react-redux'

import DText from 'app/common/components/DText'
import Input from 'app/common/components/Input'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Header extends Component {

  renderLeft() {
    return (
      <TouchableOpacity
        style={[styles.leftButton]}
        activeOpacity={0.6}
        onPress={() => Actions.pop()}
      >
        <Icon size={18} color='#999' name="ios-arrow-back" />
      </TouchableOpacity>
    )
  }

  renderRight() {
    return (
      <TouchableOpacity
        style={[styles.rightButton]}
        activeOpacity={0.6}
      >
        <View style={styles.notificationContainer}>
          <View style={styles.notificationBadge}>
            <DText style={styles.notificationText}>
              3
            </DText>
        </View>
          <Icon style={styles.headerAlign} name='ios-notifications-outline' size={18} color="#999" />
        </View>
      </TouchableOpacity>
    )
  }

  renderTitle() {
    return (
      <DText style={styles.title}>
        Texto
      </DText>
    )
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        { this.renderLeft() }
        <View style={styles.titleContainer}>
          { this.renderTitle() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFF',
    shadowColor: "#ddd",
    shadowOpacity: 1,
    shadowRadius: 10,
    paddingTop: 25,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomWidth: 0,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },

  rightButton: {
    alignSelf: 'center',
    marginLeft: 15
  },

  leftButton: {
    alignSelf: 'center',
    marginRight: 15
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    lineHeight: 30,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },

  notificationContainer: {
    alignSelf: 'center',
    flexDirection: 'row'
  },

  notificationBadge: {
    backgroundColor: '#EE8B6C',
    borderRadius: 3,
    paddingHorizontal: 7,
    height: 20,
    justifyContent: 'center',
    marginRight: 7
  },

  notificationText: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center'
  }
})
