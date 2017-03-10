import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import DText from 'app/common/components/DText'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Checkbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }
    }

    toggle() {
        this.setState({checked: !this.state.checked})
    }

    render() {
        return (
            <TouchableOpacity
              onPress={this.toggle.bind(this)}
              activeOpacity={0.9}
              style={styles.checkBoxContainer}
            >
              <View style={styles.checkBox}>
                  {this.state.checked ?
                       <Icon name="md-checkmark" size={14} color='#999' />
                       :
                       null
                  }
              </View>
              {this.props.label ?
                   <DText style={styles.checkBoxLabel}>{ this.props.label }</DText>
                   :
                   null
              }
            </TouchableOpacity>
        );
    }
}

Checkbox.propTypes = {
  label: React.PropTypes.string
}

const styles = StyleSheet.create({
    checkBoxContainer: {
      flexDirection: 'row'
    },

    checkBox: {
      backgroundColor: '#FFF',
      width: 25,
      height: 25,
      shadowColor: "#BBB",
      shadowOpacity: 0.5,
      shadowRadius: 8,
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },

    checkBoxLabel: {
      lineHeight: 25,
      color: '#666',
      marginLeft: 10
    }
})
