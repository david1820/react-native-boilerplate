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
  View
} from 'react-native';
import Login from '../../components/Login';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './styles.js';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <View style={styles.container}>
        <Login name={'David'} />
        <Card />
        <Button onPress={() => {}} />
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
