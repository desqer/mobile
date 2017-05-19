import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Header from 'app/scenes/calendar/components/Header'
import Input from 'app/common/components/Input'

export default class SearchHeader extends Header {
  renderLeft() {
    return null;
  }

  renderTitle() {
    return (
      <Input
        containerStyle={styles.inputContainer}
        iconContainerStyle={styles.icon}
        style={[styles.input]}
        icon='ios-search'
        iconSize={16}
        iconColor="#AAA"
        placeholderTextColor="#AAA"
        placeholder="Buscar um compromisso" />
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 30,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    paddingLeft: 0,
    flexDirection: 'row',
    flex: 1,
    marginTop: 0
  },

  icon: {
    alignSelf: 'center',
    paddingLeft: 0
  },

  input: {
    fontSize: 12,
    color: '#666',
    flex: 1,
    paddingHorizontal: 10
  }
});
