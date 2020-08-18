import React, { Component } from 'react';
import './App.css';
import Gamecard from './components/Gamecard';
const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      games: []
    }
  };
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.getGamesToday(),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getGamesToday() {
    let currComponent = this;
    axios.get('http://localhost:8080/games')
    .then(function (response) {
      // handle success
      let result = []
      response.data.forEach(function(game) {
        
        result.push(game);
      });
      console.log("total games: " + result);
      currComponent.setState({
        date: new Date(),
        games: result
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
 


  render() {
    return (
      [ <div key ={"bruh"} >
        <div className='title' >
          <h1>NBA Scores for {this.state.date.toDateString()} </h1>
    
        </div>
        { this.state.games.map(function(game) {
            return <Gamecard key = {game.hTeam.score + game.vTeam.score + game.hTeam.triCode} homeTeam={game.hTeam.triCode} awayTeam={game.vTeam.triCode} 
            homeTeamScore={game.hTeam.score}  awayTeamScore={game.vTeam.score}/>
        })} 
        
      </div>
      
      ]
    );
  }
}

export default App;
