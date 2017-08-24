/*
 *
 * Home
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHome from './selectors';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles.js';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function 
  render() {
    return (
      <View style={styles.container}>
        <Text>TODO Sample app</Text>
      </View>
    );
  }
}

Home.propTypes = {
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
