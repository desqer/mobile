import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'

import Input from 'app/common/components/Input'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavBar } from 'react-native-router-flux'

export default class Header extends NavBar {
  renderBackButton() {
    //Todo:: create render for back-enabled scenes
    return null
  }

  leftContainer() {
    return (
      <TouchableOpacity
        style={styles.headerAlign}
        activeOpacity={0.6}
      >
        <Icon name='ios-swap' size={18} color="#999" />
      </TouchableOpacity>
    )
  }

  rightContainer() {
    return (
      <TouchableOpacity
        style={styles.headerAlign}
        activeOpacity={0.6}
      >
        <View style={styles.notificationContainer}>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>
              3
            </Text>
          </View>
          <Icon style={styles.headerAlign} name='ios-notifications-outline' size={18} color="#999" />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.headerContainer} key={1}>
        <StatusBar hidden={false} />
        { this.leftContainer() }
        <Input
          containerStyle={styles.inputContainer}
          iconContainerStyle={styles.icon}
          inputStyle={[styles.input]}
          icon='ios-search'
          iconSize={16}
          iconColor="#AAA"
          placeholderTextColor="#AAA"
          placeholder="Buscar um compromisso"
        />
        { this.rightContainer() }
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
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 0,
    flexDirection: 'row',
    position: 'absolute',
    top: 0
  },

  headerAlign: {
    alignSelf: 'center'
  },

  inputContainer: {
    height: 30,
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    paddingLeft: 15,
    flexDirection: 'row',
    marginHorizontal: 15,
    flex: 1,
    marginTop: 0
  },

  icon: {
    alignSelf: 'center',
    paddingLeft: 0
  },

  input: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Helvetica',
    flex: 1,
    paddingHorizontal: 10
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
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center'
  }
});
