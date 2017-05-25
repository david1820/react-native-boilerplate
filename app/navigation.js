import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import Routes from './routes';

const initialRouteName = 'Home';
export const AppNavigator = StackNavigator(Routes, { initialRouteName });

const AppWithNavigationState = ({ dispatch, nav }) => (
   <View style={styles.container}>
    <StatusBar
        barStyle="light-content"
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
