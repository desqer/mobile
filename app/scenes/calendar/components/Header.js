import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput
} from 'react-native';

import IconInput from 'app/common/components/IconInput.js'
import Touchable from 'app/common/components/Touchable.js'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Touchable style={styles.headerAlign}>
          <Icon name='ios-swap' size={18} color="#999" />
        </Touchable>

        <IconInput
          containerStyle={styles.inputContainer}
          iconContainerStyle={styles.icon}
          inputStyle={[styles.input]}
          icon='ios-search'
          iconSize={16}
          iconColor="#AAA"
          placeholderTextColor="#AAA"
          placeholder="Buscar um compromisso"
          {...this.props}
          />

        <Touchable style={styles.headerAlign}>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>
                3
              </Text>
            </View>
            <Icon style={styles.headerAlign} name='ios-notifications-outline' size={18} color="#999" />
          </View>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    shadowColor: "#ddd",
    shadowOpacity: 1,
    shadowRadius: 10,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row'
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
    flex: 1
  },

  icon: {
    alignSelf: 'center',
    paddingRight: 10
  },

  input: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Helvetica',
    flex: 1
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
