import React, { Component } from 'react'
import { Scene } from 'react-native-router-flux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export const ProfileIcon = ({ selected, title }) => {
  return (
    <View style={styles.tabIcon}>
      <Icon color='#FFF' size={26} name="ios-call-outline" />
      <Text style={styles.tabText}>{ title }</Text>
    </View>
  )
}

export const DesqerIcon = ({ selected, title }) => {
  return (
    <View style={styles.hexagon}>
      <View style={styles.hexagonInner}>
         <Icon style={styles.tabIcon}
           name="md-add"
           size={30}
           color="#BE446D"
           />
       </View>
       <View style={styles.hexagonBefore} />
       <View style={styles.hexagonAfter} />
     </View>
  )
}

export const HistoryIcon = ({ selected, title }) => {
  return (
    <View style={styles.tabIcon}>
      <Icon color='#FFF' size={26} name="ios-call-outline" />
      <Text style={styles.tabText}>{ title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BE446D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    height: 60
  },

  tab: {
    flex: 1,
    flexDirection: 'column'
  },

  tabIcon: {
    alignItems: 'center'
  },

  tabText: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 11,
    fontFamily: 'Helvetica'
  },

  hexagon: {
    width: 60,
    height: 60,
    alignSelf: 'center'
  },

  hexagonInner: {
    width: 60,
    height: 30,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: -3,
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: 13,
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: '#FFF'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -23,
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    borderBottomWidth: 20,
    borderBottomColor: '#FFF'
  }
});
