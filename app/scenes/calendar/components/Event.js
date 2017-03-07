import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import DText from 'app/common/components/DText'
import Box from 'app/common/components/Box'
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
      <Box onPress={this.props.onPress}>
        <View style={styles.eventMetaContainer}>
          <View style={styles.eventMeta}>
            <Icon style={styles.eventMetaIcon} name="ios-clock-outline" size={14} color="#666" />
            <DText style={styles.eventMetaText}>
              {time}
            </DText>
          </View>
          <View style={[styles.eventMeta, styles.eventMetaLast]}>
            <Icon style={styles.eventMetaIcon} name="ios-map-outline" size={14} color="#666" />
            <DText style={styles.eventMetaText}>
              {place}
            </DText>
          </View>
        </View>
        <DText style={styles.eventTitle}>{title}</DText>
        <DText style={styles.eventDescription}>{description}</DText>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
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
    marginLeft: 5
  },

  eventTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '700',
    color: '#333'
  },

  eventDescription: {
    marginTop: 5,
    fontSize: 12,
    color: '#666'
  }
});
