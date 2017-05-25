/**
*
* ComponentA
*
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

class ComponentA extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <View style={styles.container}>
        <Text>
          ComponentA
        </Text>
      </View>
    );
  }
}

export default ComponentA;
