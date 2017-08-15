/**
*
* Button
*
*/

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

class Button extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Button
        </Text>
      </View>
    );
  }
}

export default Button;