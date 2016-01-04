'use strict';

import React, {Navigator} from 'react-native';
import Home from './components/home';
import Wiki from './components/wiki';
import {Router, Route, Schema, Animations} from 'react-native-router-flux';

let airbnb = React.createClass({
  render() {
    return (
      <Router hideNavBar={true} initialRoutes={['home']}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>

        <Route name="home" component={Home} title="Home" />
        <Route name="wiki" component={Wiki} title="Wiki" />
      </Router>
    );
  }
});

module.exports = airbnb;