'use strict';

import React, {StyleSheet, Text, View, Image} from 'react-native';
import FBLogin from 'react-native-facebook-login';
import {Actions} from 'react-native-router-flux';

let home = React.createClass({
  render() {
    return (
      <Image source={require('../img/login.jpg')} style={styles.container}>
        <Text style={styles.welcome}>
          Airbnb Bookings
        </Text>
        <FBLogin
          style={styles.facebook}
          onLogin={(data) => {
            console.log(data);
            Actions.wiki();
          }}
          onLoginFound={(data) => {
            console.log(data);
            Actions.wiki();
          }}
          onLoginNotFound={() => {
            Actions.home();
          }}
        />
      </Image>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  facebook: {
    marginTop: 50,
    backgroundColor: 'transparent',
  }
});

module.exports = home;