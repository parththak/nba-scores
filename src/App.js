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
      3000
    );
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getGamesToday() {
    let currComponent = this
    axios.get('http://localhost:8080/games')
    .then(function (response) {
      // handle success
      //console.log(JSON.stringify(response));
      let result = []
      response.data.forEach(function(game) {
        result.push(game);
      });
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
      [ <div >
        <div className='title' >
          <h1>NBA Scores for {this.state.date.toDateString()} </h1>
    
        </div>
        { this.state.games.map(function(game) {
          return <Gamecard homeTeam={game.hTeam.triCode} awayTeam={game.vTeam.triCode}/>
        })} 
        
      </div>
      
      ]
    );
  }
}

export default App;
