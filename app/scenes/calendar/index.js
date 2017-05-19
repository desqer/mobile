import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ListView,
  Keyboard,
  ActivityIndicator,
  RefreshControl
} from 'react-native'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as Actions from './actions'

import Wrap from 'app/common/components/Wrap'
import DText from 'app/common/components/DText'
import Event from 'app/scenes/calendar/components/Event'
import SearchHeader from 'app/scenes/calendar/components/SearchHeader'

function mapStateToProps(state) {
  return {
  }
}

@connect(mapStateToProps, (dispatch) => bindActionCreators(Actions, dispatch))
export default class Calendar extends Component {
  static navigationOptions = {
    header: <SearchHeader />
  }

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })

    this.state = {
      items: [],
      dataBlob: {},
      dataSource: ds.cloneWithRows([]),
      refreshing: false,
      loading: true
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
    // Actions.calendar()
    // Actions.show()
  }

  fetchAppointments() {
    this.props.fetchAppointments().then(response => {
      this.setSource(response.data)
      this.setState({
        loading: false,
        refreshing: false
      })
    }).catch(err => {
      console.log(err)
    })
  }

  approveAppointment(appointmentId) {
    this.props.approveAppointment(appointmentId).then(() => {
      this.fetchAppointments()
    }).catch(err => {
      console.log(err)
    })
  }

  cancelAppointment(appointmentId) {
    this.props.cancelAppointment(appointmentId).then(() => {
      this.fetchAppointments()
    }).catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.fetchAppointments()
  }

  _onRefresh() {
    this.setState({ refreshing: true })
    this.fetchAppointments()
  }

  render() {
    return (
      <Wrap>
        <View style={styles.contentContainer}>
          { this.state.loading ? this.renderLoadingView() : this.renderListView() }
        </View>
      </Wrap>
    )
  }

  renderLoadingView() {
    return (
      <ActivityIndicator style={styles.eventListContainer} color='#999' />
    )
  }

  renderListView() {
    return (
      <ListView
        enableEmptySections
        style={styles.eventListContainer}
        dataSource={this.state.dataSource}
        onScroll={() => Keyboard.dismiss()}
        refreshControl={
          <RefreshControl
            tintColor='#999'
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        renderRow={({key, ...appointment}) => {
          return (
            <Event
              key={key}
              onPress={() => this.handleEventPressed()}
              onApprove={() => { this.approveAppointment(appointment.id) }}
              onCancel={() => { this.cancelAppointment(appointment.id) }}
              {...appointment}
              />
          )
        }}
        renderSectionHeader={this.renderSectionHeader}
        />
    )
  }

  renderSectionHeader(sectionId, headerText) {
    return (
      <DText style={styles.dateTitle}>{headerText}</DText>
    )
  }
}

const styles = StyleSheet.create({
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
