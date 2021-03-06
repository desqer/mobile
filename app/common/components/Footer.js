import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import DText from 'app/common/components/DText'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.tab}>
          <Icon style={styles.tabIcon}
            name="ios-people-outline"
            size={26}
            color="#FFF"
            />
          <DText style={styles.tabText}>Minha conta</DText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
          activeOpacity={1.0}
          onPress={this.props.onNewPressed}>
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
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon style={styles.tabIcon}
            name="ios-bookmarks-outline"
            size={26}
            color="#FFF"
            />
          <DText style={styles.tabText}>Faturas</DText>
        </TouchableOpacity>
      </View>
    );
  }
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
    alignSelf: 'center'
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
    top: -10,
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: 20,
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: '#FFF'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -30,
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
    borderBottomWidth: 20,
    borderBottomColor: '#FFF'
  }
});
