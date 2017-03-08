import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class Box extends Component {
  render() {
    let ContainerElement = (this.props.onPress) ? TouchableOpacity : View;

    /**
     * Render icon
     */
    let icon = (this.props.onPress)
      ? <Icon style={styles.moreIcon} name="ios-more" size={32} color="#CCC" />
      : null

    return (
      <ContainerElement
        activeOpacity={0.6}
        style={[styles.boxContainer, this.props.boxStyle]}
        {...this.props}>

        <View style={styles.contentContainer}>
          { this.props.children }
        </View>

        { icon }
      </ContainerElement>
    )
  }
}

const styles = new StyleSheet.create({
  boxContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 3,
    shadowColor: "#BBB",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    flexDirection: 'row',
    marginBottom: 15
  },

  contentContainer: {
    flex: 1
  },

  moreIcon: {
    alignSelf: 'center',
    marginRight: 10
  }
})
