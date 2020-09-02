# This app displays the NBA scores for the current day

### Deployed on: https://nba-score.herokuapp.com/

### How to run locally with docker:
1. After cloning run `docker-compose up --build`
2. App should open in the new browser on `localhost:3000` displaying the current scores 
### How to run locally:
1. After cloning, run `cd client`
2. Run `npm i`
3. Run `npm start`
4. Open a new terminal
5. Go into the server directory using `cd server`
6. Run `node server.js`
7. App should be open in a new browser on `localhost:3000`


### Tech stack:
* React.js to display the components for each game
* Axios to get the data from the local server 
* Express.js to get the data from data.nba.net and server it to the local server
* Docker container to run the client and server images
* Heroku to deploy Docker images for the app and run on a serverless domain


### Todo:
* Update the UI to include team logos :heavy_check_mark:
* Update the UI to include current period and time left :heavy_check_mark:
* Add player stats to expandable team card
* Add to Heroku cloud servers using docker :heavy_check_mark:

