const express = require("express");
const cors = require("cors");
const request = require('request');

const app = express();
app.use(cors());


let data = '';

function getData() {
    request('https://data.nba.net/10s/prod/v1/20200129/scoreboard.json', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    data = res.body.games;
    
});

}

app.get("/games",function(req,res,next) {
    getData()
    res.json(data);
    next();
})



const http = require('http');
const PORT = 8080;

http.createServer(app).listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTP server on http://localhost:%s", PORT);
});