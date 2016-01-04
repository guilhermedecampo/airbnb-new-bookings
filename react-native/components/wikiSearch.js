'use strict';

import React, {View} from 'react-native';
import SearchBar from 'react-native-search-bar';
import WikiItem from './wikiItem';


let WikiSearch = React.createClass({
  getInitialState() {
    return {keyword: ''};
  },
  getKeyword(keyword) {
    this.setState({keyword});
  },
  render() {
    let {keyword} = this.state;
    return(
      <View>
        <SearchBar
          ref='searchBar'
          placeholder='Search'
          onChangeText={this.getKeyword}
        />
        <WikiItem keyword={keyword} />
      </View>
    );
  }
})


module.exports = WikiSearch;