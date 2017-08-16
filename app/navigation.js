import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './routes';

const AppWithNavigationState = ({ dispatch, nav }) => (
  <View style={styles.container}>
    <StatusBar
      barStyle="dark-content"
    />
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  </View>
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps)(AppWithNavigationState);
