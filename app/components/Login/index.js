/**
*
* Login
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles.js';

const Login = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>Hola {name}!!!</Text>
    </View>
  );
};

Login.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Login;
