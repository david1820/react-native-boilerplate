/**
*
* Button
*
*/

import React, { PureComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles.js';

class Button extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text>
          Button
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;