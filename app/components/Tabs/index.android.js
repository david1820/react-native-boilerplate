import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import BottomNavigation from '../BottomNavigation';
import Tab from '../Tab/index';
import rssFeedIcon from '../../assets/rss_feed.png';
import accountIcon from '../../assets/account_circle.png';

class Tabs extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedTab: 0,
    active: true,
  };
  renderContent() {
    const { profileElement, newsListElement } = this.props;
    const { selectedTab } = this.state;
    switch (selectedTab) {
      case 0:
        return newsListElement;
      case 1:
        return profileElement;
      default:
        return newsListElement;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContent}>
          {this.renderContent()}
        </View>
        <BottomNavigation
          labelColor="#ffffff"
          onTabChange={(newTabIndex) => this.setState({ selectedTab: newTabIndex })}
          style={{height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        >
          <Tab
            barBackgroundColor="#FF5722"
            label="Noticias"
            icon={<Image source={rssFeedIcon} />}
          />
          <Tab
            barBackgroundColor="#FF5722"
            label="Perfil"
            icon={<Image source={accountIcon} />}
          />
        </BottomNavigation>
      </View>
    );
  }
}

Tabs.propTypes = {
  profileElement: PropTypes.element,
  newsListElement: PropTypes.element,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f2f4',
  },
  progress: {
  },
  button: {
    marginRight: 8,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

export default Tabs;
