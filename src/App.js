import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

import YoutubeSearch from 'youtube-api-search';
import './App.css';

const YOUTUBE_API_KEY = 'AIzaSyBB8QIRVNhhsnuo7ApTVQ4cgmzjj8E4zeg'

export default class App extends React.Component {
  state = { videos: [] }

  componentDidMount() {
    YoutubeSearch({ key: YOUTUBE_API_KEY, term: '猫'}, (data) => {
      this.setState({videos: data});
    });
  }

  render() {
    console.log(this.state.videos);
    return (
      <div className="App">
        <Header />
        <Body>
          <Video video={this.state.videos[0]} />
          <List videos={this.state.videos} />
        </Body>
      </div>
    )
  }
}
