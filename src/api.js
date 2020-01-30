const axios = require('axios');

let config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

async function getGamesToday() {
  axios.get('https://data.nba.net/10s/prod/v1/20200129/scoreboard.json', config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}




module.exports = {
  getGamesToday
}