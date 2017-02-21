import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class Event extends Component {
  render() {
    const {
      time,
      place,
      title,
      description
    } = this.props

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.eventContainer}>
          <View style={styles.eventInfoContainer}>
            <View style={styles.eventMetaContainer}>
              <View style={styles.eventMeta}>
                <Icon style={styles.eventMetaIcon} name="ios-clock-outline" size={14} color="#666" />
                <Text style={styles.eventMetaText}>
                  {time}
                </Text>
              </View>
              <View style={[styles.eventMeta, styles.eventMetaLast]}>
                <Icon style={styles.eventMetaIcon} name="ios-map-outline" size={14} color="#666" />
                <Text style={styles.eventMetaText}>
                  {place}
                </Text>
              </View>
            </View>
            <Text style={styles.eventTitle}>{title}</Text>
            <Text style={styles.eventDescription}>{description}</Text>
          </View>
          <Icon style={styles.moreIcon} name="ios-more" size={32} color="#CCC" />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  eventContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 3,
    shadowColor: "#BBB",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    flexDirection: 'row'
  },

  eventInfoContainer: {
    flex: 1
  },

  eventMetaContainer: {
    flexDirection: 'row'
  },

  eventMeta: {
    flexDirection: 'row',
    paddingRight: 10,
    marginRight: 10,
    borderRightWidth: 1,
    borderColor: '#EEE',
    borderStyle: 'solid'
  },

  eventMetaLast: {
    borderRightWidth: 0,
    paddingRight: 0,
    marginRight: 0
  },

  eventMetaText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Helvetica',
    marginLeft: 5
  },

  eventTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Helvetica',
    color: '#333'
  },

  eventDescription: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#666'
  },

  moreIcon: {
    alignSelf: 'center',
    marginRight: 10
  }
});
