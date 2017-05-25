/*
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectHome from './selectors';
import {
  Text,
  View
} from 'react-native';
import styles from './styles.js';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { nombre } = this.props;
    return (
      <View style={styles.container}>
       <Text>{nombre}</Text>
      </View>
    );
  }
}

Home.propTypes = {
  nombre: PropTypes.string,
};

Home.navigationOptions = ({ navigation, screenProps }) => ({ // eslint-disable-line
  title: 'Home',
  headerTintColor: '#FFFFFF',
  headerStyle: {
    backgroundColor: '#F31221',
  },
});

const mapStateToProps = selectHome();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
