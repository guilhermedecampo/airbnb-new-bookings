'use strict';

import React, {StyleSheet, Text, View} from 'react-native';
import FBLogin from 'react-native-facebook-login';
import {FBLoginManager} from 'NativeModules';
import {Actions} from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import WikiSearch from './wikiSearch';

const titleConfig = {
  title: 'Wiki Search',
};

const rightButtonConfig = {
  title: 'Logout',
  tintColor: '#000',
  handler() {
    FBLoginManager.logout((error, data) => {
      if (!error) {
        console.log(this, data);
        Actions.home();
      } else {
        console.log(error, data);
      }
    });
  }
}

let Wiki = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.header}
          title={titleConfig}
          rightButton={rightButtonConfig}
        />
        <WikiSearch />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#444',
    backgroundColor: 'transparent',
  }
});

module.exports = Wiki;