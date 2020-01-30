const axios = require('axios');


function getGamesToday() {
  axios.get('http://localhost:8080/games')
  .then(function (response) {
    // handle success
    //console.log(JSON.stringify(response));
    
    return parseResponse(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return("error")
  })
}

function parseResponse(res) {
  let result = []
  res.forEach(function(game) {
    result.push(game);
  });
  return result
}


module.exports = {
  getGamesToday: getGamesToday
}