import './App.css';
import './index.js';
import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import useFetch from "react-fetch-hook";
import axios from 'axios';
// import Genius from "genius-lyrics";
const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
]
const test = [{"text":"","value":5},{"text":"o","value":8},{"text":"holy","value":3},{"text":"night","value":7},{"text":"the","value":11},{"text":"stars","value":1},{"text":"are","value":1},{"text":"brightly","value":1},{"text":"shining","value":1},{"text":"it","value":1},{"text":"is","value":6},{"text":"of","value":6},{"text":"our","value":6},{"text":"dear","value":1},{"text":"savior's","value":1},{"text":"birth","value":1},{"text":"long","value":1},{"text":"lay","value":2},{"text":"world","value":2},{"text":"in","value":5},{"text":"sin","value":1},{"text":"and","value":7},{"text":"error","value":1},{"text":"pining","value":1},{"text":"'til","value":1},{"text":"he","value":4},{"text":"appears","value":1},{"text":"soul","value":1},{"text":"felt","value":1},{"text":"its","value":1},{"text":"worth","value":1},{"text":"a","value":3},{"text":"thrill","value":1},{"text":"hope","value":1},{"text":"weary","value":1},{"text":"rejoices","value":1},{"text":"for","value":2},{"text":"yonder","value":1},{"text":"breaks","value":1},{"text":"new","value":1},{"text":"glorious","value":1},{"text":"morn","value":1},{"text":"fall","value":1},{"text":"on","value":1},{"text":"your","value":3},{"text":"knees","value":1},{"text":"hear","value":1},{"text":"angel","value":1},{"text":"voices","value":1},{"text":"divine","value":2},{"text":"when","value":1},{"text":"christ","value":2},{"text":"was","value":1},{"text":"born","value":2},{"text":"led","value":2},{"text":"by","value":3},{"text":"light","value":2},{"text":"faith","value":1},{"text":"serenely","value":1},{"text":"beaming","value":1},{"text":"with","value":1},{"text":"glowing","value":1},{"text":"hearts","value":1},{"text":"his","value":8},{"text":"cradle","value":1},{"text":"we","value":2},{"text":"stand","value":1},{"text":"so","value":1},{"text":"star","value":1},{"text":"sweetly","value":1},{"text":"gleaming","value":1},{"text":"here","value":1},{"text":"come","value":1},{"text":"wise","value":1},{"text":"men","value":1},{"text":"from","value":1},{"text":"orient","value":1},{"text":"land","value":1},{"text":"king","value":3},{"text":"kings","value":1},{"text":"thus","value":1},{"text":"lowly","value":3},{"text":"manger","value":1},{"text":"all","value":3},{"text":"trials","value":1},{"text":"to","value":3},{"text":"be","value":1},{"text":"friend","value":1},{"text":"knows","value":1},{"text":"need","value":1},{"text":"weakness","value":1},{"text":"no","value":1},{"text":"stranger","value":1},{"text":"behold","value":2},{"text":"before","value":2},{"text":"him","value":2},{"text":"bend","value":2},{"text":"truly","value":1},{"text":"taught","value":1},{"text":"us","value":2},{"text":"love","value":2},{"text":"one","value":1},{"text":"another","value":1},{"text":"law","value":1},{"text":"gospel","value":1},{"text":"peace","value":1},{"text":"chains","value":1},{"text":"shall","value":2},{"text":"break","value":1},{"text":"slave","value":1},{"text":"brother","value":1},{"text":"name","value":3},{"text":"oppression","value":1},{"text":"cease","value":1},{"text":"sweet","value":1},{"text":"hymns","value":1},{"text":"joy","value":1},{"text":"grateful","value":1},{"text":"chorus","value":1},{"text":"raise","value":1},{"text":"let","value":1},{"text":"within","value":1},{"text":"praise","value":2},{"text":"lord","value":1},{"text":"forever","value":1},{"text":"power","value":2},{"text":"glory","value":2},{"text":"evermore","value":2},{"text":"proclaim","value":2}];
function SimpleWordcloud(wordMap) {
  return <ReactWordcloud words={wordMap} />
}
  // const requestOptions = {
  //   mode: 'cors', 
  //   origin: "https://localhost:3000",
  //   method: 'GET',
  //   headers: {
      // 'Content-Type': 'application/json',
      // 'Authorization': "Bearer eKj82WsaoW89JCnh2Lzhkz5m2xVejbBEJONdDj5aQllvfmB17HeK7JvwNJUSjyjq",
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET',
      // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods'
  //   }
  // };
//   const url = "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=michael+jackson&song=thriller";
//   const requestOptions = {headers: {'Authorization': "Bearer eKj82WsaoW89JCnh2Lzhkz5m2xVejbBEJONdDj5aQllvfmB17HeK7JvwNJUSjyjq",'Access-Control-Allow-Origin': 'https://localhost:3000'
// ,}};
//   const url = "https://api.genius.com/songs/378195";
//   // const url = "https://api.randomuser.me/";
  // const { isLoading, data, errors } = fetch(url, requestOptions);
  // console.log(isLoading, data, errors);
//   const s= "asdf";


// const { isLoading, data, errors } = axios({
//       'url':url,
//       'headers': {
//         'Access-Control-Allow-Origin': '*',
//       },
//   })
// console.log({data});


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
    const baseUrl = 'http://localhost:9000/lyric?';
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
  // async componentDidMount() {
    // const Client = new Genius.Client();
    // const searches = await Client.songs.search("faded");

    // // Pick first one
    // const firstSong = searches[0];
    // console.log("About the Song:\n", firstSong, "\n");

    // // Ok lets get the lyrics
    // const lyrics = await firstSong.lyrics();
    // console.log("Lyrics of the Song:\n", lyrics, "\n");
  // }
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
          <ReactWordcloud words={this.state.lyrics}/>
          <p className="App-intro">
            {/* {this.state.lyrics} */}
          </p>
      </div>
    

  );}
  
}

export default App;
