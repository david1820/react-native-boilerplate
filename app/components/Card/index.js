/**
*
* Card
*
*/
import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles.js';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card Stateless component</Text>
    </View>
  );
};

Card.propTypes = {};

export default Card;