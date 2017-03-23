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

class Header extends Component {

  static left(state) {
    return (
      <TouchableOpacity
        style={[styles.headerAlign, styles.leftButton]}
        activeOpacity={0.6}
        onPress={() => Actions.pop()}
      >
        <Icon size={18} color='#999' name="ios-arrow-back" />
      </TouchableOpacity>
    )
  }

  static right(state) {
    return (
      <TouchableOpacity
        style={[styles.headerAlign, styles.rightButton]}
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

  static title(state) {
    console.log(state);
    return (
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
    top: 0
  },

  headerAlign: {
    alignSelf: 'center'
  },

  rightButton: {
    alignSelf: 'center',
    marginLeft: 15
  },

  leftButton: {
    alignSelf: 'center',
    marginRight: 15
  },

  inputContainer: {
    height: 30,
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    paddingLeft: 15,
    flexDirection: 'row',
    flex: 1,
    marginTop: 0
  },

  titleContainer: {
    flex: 1,
    lineHeight: 30,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
},

  icon: {
    alignSelf: 'center',
    paddingLeft: 0
  },

  input: {
    fontSize: 12,
    color: '#666',
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
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center'
  }
})

export default connect((state) => { return { nav: state.nav } })(Header)
