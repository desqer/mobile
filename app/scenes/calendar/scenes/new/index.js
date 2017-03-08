import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import DText from 'app/common/components/DText'
import Input from 'app/common/components/Input'
import Container from 'app/common/components/Container'

export default class New extends Component {
  render() {
    return (
      <Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  contentContainer: {
    flex: 1,
    paddingTop: 65
  },
});
