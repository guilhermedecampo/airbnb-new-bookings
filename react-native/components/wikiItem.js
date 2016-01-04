'use strict';

import React, {StyleSheet, Text, View} from 'react-native';
import {Lokka} from 'lokka';
import {Transport} from 'lokka-transport-http';

let client = new Lokka({
  transport: new Transport('http://localhost:3000/data')
});

const query = `
  query getArticle($title: String!) {
    article(title: $title) {
      pageid,
      title,
      info,
    }
  }
`;

let WikiItem = React.createClass({
  getInitialState() {
    return {wiki: {}};
  },
  queryTitle() {
    return {title: this.props.keyword};
  },
  componentWillReceiveProps() {
    client.query(query, this.queryTitle()).then(result => {
      this.setState({wiki: result.article});
      this.setState({error: undefined});
    }).catch(error => {
      this.setState({error});
    });
  },
  render() {
    let {wiki} = this.state;
    return (
      <View>
        {this.renderHelpers()}
        <Text key={wiki.title}>{wiki.title}</Text>
        <Text key={wiki.info}>{wiki.info}</Text>
      </View>
    );
  },
  renderHelpers() {
    let {error, wiki} = this.state;
    if(error) {
      return (
        <View>
          <Text>Oops..</Text>
          <Text>{error.message}</Text>
        </View>
      );
    } else if (!error && !Object.keys(wiki)[0]) {
      return (<Text>Please type something...</Text>);
    } else if (!Object.keys(wiki)[0]) {
      return (<Text>loading...</Text>);
    } else {
      return (<Text>Result: </Text>);
    }
  }
});

module.exports = WikiItem;