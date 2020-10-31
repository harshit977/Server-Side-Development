const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3001', 'https://localhost:3444'];   //list of origins needed
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {    //checks whether 'origin' in request header is in the white list or not
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);