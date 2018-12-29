import React, { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';

class App extends Component {

  state = { videos: [ ] };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // response.data.items
    this.setState({ videos: response.data.items }); 
    // console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {this.state.videos.length} 개의 영상이 있습니다.
      </div>
    );
  }
}

export default App;
