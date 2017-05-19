import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import DText from 'app/common/components/DText'
import Button from 'app/common/components/Button'
import Box from 'app/common/components/Box'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      approveLoading: false
    }
  }

  renderReviewButtons() {
    return (
      <View style={styles.reviewButtonsContainer}>
        <Button
          onPress={() => {
            this.setState({ approveLoading: true })
            this.props.onApprove()
          }}
          loading={this.state.approveLoading}
          style={[styles.reviewButton, styles.approveButton]}
          icon="ios-checkmark"
          size="small"
          color="success">
          Aprovar
        </Button>
        <Button
          onPress={() => {
            this.setState({ cancelLoading: true })
            this.props.onCancel()
          }}
          loading={this.state.cancelLoading}
          style={styles.reviewButton}
          icon="ios-close"
          size="small"
          color="danger">
          Cancelar
        </Button>
      </View>
    )
  }

  render() {
    const {
      name,
      starts_at,
      ends_at,
      venue_name,
      professional_name,
      owned,
      status
    } = this.props

    return (
      <Box onPress={this.props.onPress} leftMark={owned}>
        <View style={styles.eventMetaContainer}>
          <View style={styles.eventMeta}>
            <Icon style={styles.eventMetaIcon} name="ios-clock-outline" size={14} color="#666" />
            <DText style={styles.eventMetaText}>
              {starts_at} às {ends_at}
            </DText>
          </View>
          <View style={[styles.eventMeta, styles.eventMetaLast]}>
            <Icon style={styles.eventMetaIcon} name="ios-map-outline" size={14} color="#666" />
            <DText style={styles.eventMetaText}>
              {venue_name}
            </DText>
          </View>
        </View>
        <DText style={styles.eventTitle}>{name}</DText>
        <DText style={styles.eventDescription}>com {professional_name}</DText>

        { status == 'pending' && this.renderReviewButtons() }
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
  },

  reviewButtonsContainer: {
    flexDirection: 'row',
    transform: [
      { scale: 1 }
    ]
  },

  reviewButton: {
    flex: 1
  },

  approveButton: {
    marginRight: 10
  }
});
