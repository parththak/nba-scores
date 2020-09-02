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
        clock: props.clock,
        time: props.time
    };
}


render() {
    return (
      [
      <div className="gameCardContainer">
        <div className="gameCard">

          <div className="team"> 
            <div className="teamCard">
              <img src={require("../assests/" + this.state.homeTeam + ".png")} alt="Home team" width="50" height="50"/>
            </div>
            <div className="teamCard">
              <p>{this.state.homeTeam}: {this.state.homeTeamScore}</p>
            </div>
          </div>

          <div className="team"> 
            <div className="teamCard">
              <img src={require("../assests/" + this.state.awayTeam + ".png")} alt="Home team" width="50" height="50"/>
            </div>
            <div className="teamCard">
              <p>{this.state.awayTeam}: {this.state.awayTeamScore}</p>
            </div>
          </div>
          
          <div className="period">

            <div className="teamCard">
                <p>{this.state.game || this.state.awayTeamScore + this.state.homeTeamScore === 0 
                ? this.state.period === 0 ? "Start time: " + this.state.time : "Period: " +  this.state.period 
                : "FINAL"}</p>         
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
