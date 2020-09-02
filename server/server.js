const express = require("express");
const cors = require("cors");
const request = require('request');

const app = express();
app.use(cors());



// let data = ''
// function getData() {
//     //let todayDate = new Date().toISOString().slice(0,10).split('-').join("");
//     let date = new Date().getDate().toString();
//     let year = new Date().getFullYear().toString();
//     let month = (new Date().getMonth() + 1);
//     if (month < 10) {
//         month = "0" + month.toString();
//     }
//     if (date < 10) {
//         date = "0" + date.toString();
//     }
//     request('https://data.nba.net/10s/prod/v1/'+ year + month + date +'/scoreboard.json', { json: true }, 
//         (err, res, body) => {
//         if (err) { return console.log(err); }
//         return res.body.games;

// });

// }

app.get("/games", function(req,response,next) {
    //let todayDate = new Date().toISOString().slice(0,10).split('-').join("");
    let date = new Date().getDate().toString();
    let year = new Date().getFullYear().toString();
    let month = (new Date().getMonth() + 1);
    if (month < 10) {
        month = "0" + month.toString();
    }
    if (date < 10) {
        date = "0" + date.toString();
    }
    request('https://data.nba.net/10s/prod/v1/'+ year + month + date +'/scoreboard.json', { json: true }, 
        (err, res, body) => {
        if (err) { return console.log(err); }
        response.json(res.body.games);
        next();

    });
   
})



const http = require('http');
const PORT = process.env.PORT | 8000;

http.createServer(app).listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTP server on http://localhost:%s", PORT);
});