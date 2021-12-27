import './App.css';
import './index.js';
import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {lyrics: [],
                  artist: "Adele", 
                  song: "Easy+on+me"};
    this.updateArtist = this.updateArtist.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    // this.updateInput = this.updateInput.bind(this);
  }
  updateArtist(event) {
    const artist = event.target.value.replace(/ /g,'+');
    this.setState({artist: artist});
  }

  updateSong(event) {
    const song = event.target.value.replace(/ /g,'+');
    this.setState({song: song});
  }

  handleSubmit() {
    console.log(this.state.artist, this.state.song);
    this.callAPI();
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
    console.log(this.state.lyrics);
    if(!this.state.lyrics.length)
      return (
        <div>
          <input type="text" onChange={this.updateArtist}></input>
          <input type="text" onChange={this.updateSong}></input>
          <input type="submit" onClick={this.handleSubmit} ></input>
        </div>
      );
    return (
      <div className="App">
        <div>
          <input type="text" onChange={this.updateArtist}></input>
          <input type="text" onChange={this.updateSong}></input>
          <input type="submit" onClick={this.handleSubmit} ></input>
        </div>
          <ReactWordcloud 
            options={
              {deterministic:"true",
              fontSizes: [15,100],
              rotationAngles: [0,1],
              rotations: 0
              }
            }
            words={this.state.lyrics}
            minSize={[500,500]}
          />
          <p className="App-intro">
            {/* {this.state.lyrics} */}
          </p>
      </div>
    

  );}
  
}

export default App;
