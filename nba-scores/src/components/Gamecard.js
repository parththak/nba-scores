import React, { Component } from 'react';
import '../Gamecard.css';
 
class Gamecard extends Component {

constructor(props) {
    super(props);
    this.state = {
        homeTeam: 'Home',
        awayTeam: 'Away',
        homeTeamScore: 0,
        awayTeamScore: 0
    };
}
render() {
    return (
      [
      <div className="teamCardContainer">
        <div className="teamCard">
        
        </div>
          

      </div>]
    );
  }
}

export default Gamecard;
