import React, { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
  state = {
    videos: [],
    selectedVideos: null
  };

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

  onVideoSelect = video => {
    console.log('from the app!', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList onVselect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
