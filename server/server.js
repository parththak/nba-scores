const express = require("express");
const cors = require("cors");
const request = require('request');

const app = express();
app.use(cors());


let data = '';

function getData() {
    //let todayDate = new Date().toISOString().slice(0,10).split('-').join("");
    let date = new Date().getDate().toString();
    let year = new Date().getFullYear().toString();
    let month = (new Date().getMonth() + 1);
    if (month < 10) {
        month = "0" + month.toString();
    }
    request('https://data.nba.net/10s/prod/v1/'+ year + month + date +'/scoreboard.json', { json: true }, (err, res, body) => {
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