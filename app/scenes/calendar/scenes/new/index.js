import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import DText from 'app/common/components/DText'
import Input from 'app/common/components/Input'
import Container from 'app/common/components/Container'

export default class New extends Component {
  render() {
    return (
      <Container>
        <Text>Hello World</Text>
        <Input
          shadow={true}
          placeholder='Digite seu telefone'
          autoCapitalize='none'
        />
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
