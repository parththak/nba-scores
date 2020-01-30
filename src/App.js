import React, { Component } from 'react';
import './App.css';
import Gamecard from './components/Gamecard';
import Api from './api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  };

  tick() {
    this.setState({
      date: new Date()
    });
    //Api.getGamesToday();
  };
  // componentDidMount() {
  //   fetch('http://data.nba.net/10s/prod/v1/20200129/scoreboard.json')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data })
  //   })
  //   .catch(console.log)}



  render() {
    return (
      [ <div >
        <div className='title' >
          <h1>NBA Scores for {this.state.date.toDateString()} </h1>
        </div>
        
        <Gamecard  />
      </div>
      
      ]
    );
  }
}

export default App;
