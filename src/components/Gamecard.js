import React, { Component } from 'react';
import '../Gamecard.css';
 
class Gamecard extends Component {

constructor(props) {
    super(props);
    this.state = {
        homeTeam: props.homeTeam,
        awayTeam: props.awayTeam,
        homeTeamScore: props.homeTeamScore ? props.homeTeamScore : 0 ,
        awayTeamScore: props.awayTeamScore ? props.awayTeamScore : 0,
        period: props.period,
        game: props.game,
        clock: props.clock
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

          <div className="period">

            <div className="teamCard">
                <p>{this.state.game ? "Period: " +  this.state.period : "FINAL"}</p>         
            </div>

            {this.state.game ? <div className="teamCard">
                <p>{"Time: " + this.state.clock } </p>  </div> : ""        
            }
            
          </div>
           
      
        </div>
          

      </div>]
    );
  }
}

export default Gamecard;
