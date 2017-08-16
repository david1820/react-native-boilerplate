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
} from 'react-native';
import Login from '../../components/Login';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styles from './styles.js';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    name: 'david',
  };
  render() {
    return (
      <View style={styles.container}>
        <Login
          name={'David'}
        />
        <Card />
        <Button onPress={() => {}} />
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
