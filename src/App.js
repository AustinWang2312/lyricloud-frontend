import './App.css';
import './index.js';
import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
var globalArtist = "";
var globalSong = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {lyrics: [],
                  artist: "Adele", 
                  song: "Easy On Me"};
    this.updateArtist = this.updateArtist.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  updateArtist(event) {
    const artist = event.target.value;
    globalArtist = artist;
    // this.setState({artist: artist});
  }

  updateSong(event) {
    const song = event.target.value;
    globalSong = song;
    // this.setState({song: song});
  }

  handleSubmit() {
    this.setState({artist: globalArtist, song: globalSong, lyrics:[]},
      ()=>{this.callAPI();})
    console.log(this.state.artist, this.state.song,globalArtist,globalSong);
    
  }
  callAPI() {
    // const baseUrl = 'http://localhost:9000/lyric?';
    const baseUrl = 'https://lyricloud-api-backend.vercel.app/api/lyric?';
    const fullUrl = baseUrl + 'artist=' + this.state.artist 
    + '&' + 'song=' + this.state.song;
    console.log(fullUrl);

    fetch(fullUrl)
        .then(res => res.json())
        .then(res => {
          this.setState({ lyrics: res });
          console.log(typeof(res));
        });
  }
  componentDidMount() {
    this.callAPI();
  }
  render() {
    // console.log(this.state.lyrics);
    if(!this.state.lyrics.length)
      return (
        <div>
          <input type="text" onChange={this.updateArtist}></input>
          <input type="text" onChange={this.updateSong}></input>
          <input type="submit" onClick={this.handleSubmit} ></input>
        </div>
      );
    const options = 
      {deterministic:"true",
      fontSizes: [15,100],
      rotationAngles: [0,1],
      rotations: 0
      };

    // const words = this.state.lyrics;
    const minSize = [500,500];



    return (
      <div className="App">
        <h1>Lyricloud</h1>
        <div>
          <input type="text" onChange={this.updateArtist}></input>
          <input type="text" onChange={this.updateSong}></input>
          <input type="submit" onClick={this.handleSubmit} ></input>
        </div>
        <h2>{this.state.song}</h2>
        <h3>{this.state.artist}</h3>
          <ReactWordcloud 
            options={options}
            words={this.state.lyrics}
            minSize={minSize}
          />
      </div>
  );}
  
}

export default App;
