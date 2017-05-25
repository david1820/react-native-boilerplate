/**
*
* BottomNavigation
*
*/

import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

const defaultProps = {
  activeTab: 0,
  labelColor: 'rgba(0, 0, 0, 0.54)',
  rippleColor: 'black',
  backgroundColor: 'white',
  onTabChange: () => {}
}

class BottomNavigation extends Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps: typeof defaultProps
  _handleTabChange = ({ tabIndex }) => {
    setTimeout(() => {
      this.props.onTabChange(tabIndex)
    });
  }
  render() {
    return (
    <View style={styles.container}>
      {React.Children.map(this.props.children, (child, tabIndex) => (
            React.cloneElement(child, {
              tabIndex: tabIndex,
              onTabPress: this._handleTabChange,
              ref: `tab_${tabIndex}`,

              // Pass setted props, or inherited props by parent component
              labelColor: child.props.labelColor || this.props.labelColor,
              activeLabelColor: child.props.activeLabelColor ||
                this.props.activeLabelColor,
              barBackgroundColor: child.props.barBackgroundColor ||
                this.props.backgroundColor
            })
    ))}
    </View>
    );
  }
}

BottomNavigation.propTypes = {
  children: PropTypes.array,
  activeTab: PropTypes.number,
  labelColor: PropTypes.string,
  activeLabelColor: PropTypes.string,
  rippleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onTabChange: PropTypes.func,
  style: PropTypes.any,
  innerStyle: PropTypes.any,
};

const styles= {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5722'
  },
};

export default BottomNavigation;
