/**
*
* Tabs
*
*/

import React, { Component, PropTypes } from 'react';
import { TabBarIOS } from 'react-native';
import rssFeedIcon from '../../assets/rss_feed.png';
import accountIcon from '../../assets/account_circle.png';

class Tabs extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedTab: 'news',
    notifCount: 0,
    presses: 0,
  };
  render() {
    const { profileElement, newsListElement } = this.props;
    return (
      <TabBarIOS
        unselectedTintColor="#ffffff"
        tintColor="white"
        unselectedItemTintColor="#ffffff"
        barTintColor="#FF5722"
      >
        <TabBarIOS.Item
          title="Noticias"
          icon={rssFeedIcon}
          selected={this.state.selectedTab === 'news'}
          onPress={() => {
            this.setState({
              selectedTab: 'news',
            });
          }}>
          {newsListElement}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Perfil"
          icon={accountIcon}
          selected={this.state.selectedTab === 'account'}
          onPress={() => {
            this.setState({
              selectedTab: 'account',
            });
          }}>
          {profileElement}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

Tabs.propTypes = {
  profileElement: PropTypes.element,
  newsListElement: PropTypes.element,
};

export default Tabs;
