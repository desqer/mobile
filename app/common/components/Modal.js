import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

import Box from './Box'

export default class Modal extends Component {
  render() {
    return (
      <View style={styles.modalOverlay}>
        <Box boxStyle={styles.boxContainer}>
          { this.props.children }
        </Box>
      </View>
    );
  }
}

Modal.propTypes = {
  children: React.PropTypes.element.isRequired
}

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },

  boxContainer: {
    marginHorizontal: 20,
    shadowColor: "#333",
    shadowOpacity: 0.1,
    shadowRadius: 4
  }
});
