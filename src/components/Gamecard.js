import React, { Component } from 'react';
import '../Gamecard.css';
 
class Gamecard extends Component {

constructor(props) {
    super(props);
    this.state = {
        homeTeam: props.homeTeam,
        awayTeam: props.awayTeam,
        homeTeamScore: props.homeTeamScore ? props.homeTeamScore : 0 ,
        awayTeamScore: props.awayTeamScore ? props.awayTeamScore : 0
    };
}
render() {
    return (
      [
      <div className="gameCardContainer">
        <div className="gameCard">
          <div className="teamCard">
            <p>{this.state.homeTeam}: {this.state.homeTeamScore}</p>
          </div>

          <div className="teamCard">
              <p>{this.state.awayTeam}: {this.state.awayTeamScore}</p>         
           </div>
      
        </div>
          

      </div>]
    );
  }
}

export default Gamecard;
