import React, { Component } from 'react';
import './App.css';
import Gamecard from './components/Gamecard';
const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      games: [],
      num: 0
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
    let old = this.state.num
    axios.get('http://localhost:8080/games')
    .then(function (response) {
      // handle success
      let result = []
      response.data.forEach(function(game) {
        
        result.push(game);
      });
      currComponent.setState({
        date: new Date(),
        games: result,
        num: old + 1
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
 


  render() {
    return (
      [ <div key ={this.state.num} >
        <div className='title' >
          <h1>NBA Scores for {this.state.date.toDateString()} </h1>
    
        </div>
        { this.state.games.map((game) => {
            return <Gamecard key = {game.hTeam.score + game.vTeam.score + game.vTeam.triCode} 
            homeTeam={game.hTeam.triCode} awayTeam={game.vTeam.triCode} homeTeamScore={game.hTeam.score}  
            awayTeamScore={game.vTeam.score} period ={game.period.current} game = {game.isGameActivated} 
            clock = {game.clock} />
        })} 
        
      </div>
      
      ]
    );
  }
}

export default App;
