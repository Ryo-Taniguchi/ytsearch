import React from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';
import './App.css';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class App extends React.Component {
  state = { 
    videos: [],
    selected: null,
  }

  onClickVideoHandker = (video) => {
    this.setState({ selected: video});
  }

  onSearchVideo = (value) => {
    console.log(value);
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${value}&maxResults=10&key=${YOUTUBE_API_KEY}`;
    axios
      .get(url)
      .then(response => {
          this.setState({
            videos: response.data.items,
            selected: response.data.items[0]
          });
      })
      .catch(() => {
          console.log('通信に失敗しました');
      });
  }

  render() {
    return (
      <div className="App">
        <Header searchWord={this.onSearchVideo}/>
        <Body>
          <Video video={this.state.selected} />
          <List 
            videos={this.state.videos} 
            onClickVideoHandker={this.onClickVideoHandker}
            selectedVideo={this.state.selected}
          />
        </Body>
      </div>
    )
  }
}
