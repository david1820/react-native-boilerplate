/**
 * HocwithPush HOC
 */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import {} from 'react-native';
// import styles from './styles';

function hocwithPush(WrappedComponent) {
  return class extends PureComponent { // eslint-disable-line
    state = {}
    componentDidMount = () => {
      console.log('ComponentMounts HOC'); // eslint-disable-line
    }
    static propTypes = {}

    render() {
      return (<WrappedComponent {...this.props} />);
    }
  };
}

export default hocwithPush;