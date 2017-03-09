import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ListView,
  Keyboard,
  ActivityIndicatorIOS
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import DText from 'app/common/components/DText'
import Event from 'app/scenes/calendar/components/Event'

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })

    this.state = {
      items: [],
      dataBlob: {},
      dataSource: ds.cloneWithRows([])
    }

    this.setSource = this.setSource.bind(this)
    this.handleEventPressed = this.handleEventPressed.bind(this)
  }

  setSource(dataBlob, state = {}) {
    this.setState({
      dataBlob,
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob),
      ...state
    })
  }

  handleEventPressed() {
    Actions.calendar()
    Actions.show()
  }

  componentDidMount() {
    const eventItems = {
      'Hoje, 14 de Janeiro': [
        {
          key: Date.now(),
          time: '9:00 às 10:00h',
          place: 'Cabelo & Cia',
          title: 'Corte de cabelo e barba',
          description: 'com Diego Schell Fernandes'
        },
        {
          key: Date.now(),
          time: '10:00 às 11:00h',
          place: 'Cabelo & Cia',
          title: 'Corte de cabelo e barba',
          description: 'com Diego Schell Fernandes'
        }
      ],
      'Amanhã, 15 de Janeiro': [
        {
          key: Date.now(),
          time: '08:00 às 11:00h',
          place: 'Cabelo & Cia',
          title: 'Corte de cabelo e barba',
          description: 'com Diego Schell Fernandes'
        }
      ]
    }

    this.setSource(eventItems)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ListView
            enableEmptySections
            style={styles.eventListContainer}
            dataSource={this.state.dataSource}
            onScroll={() => Keyboard.dismiss()}
            renderRow={({key, ...value}) => {
              return (
                <Event
                  key={key}
                  onPress={() => this.handleEventPressed()}
                  {...value}
                  />
              )
            }}
            renderSectionHeader={this.renderSectionHeader}
            />
        </View>
      </View>
    )
  }

  renderSectionHeader(sectionId, headerText) {
    return (
      <DText style={styles.dateTitle}>{headerText}</DText>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 65
  },

  contentContainer: {
    flex: 1
  },

  eventListContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  dateTitle: {
    fontWeight: '700',
    fontSize: 13,
    color: '#666',
    alignSelf: 'center',
    marginBottom: 15
  }
})
