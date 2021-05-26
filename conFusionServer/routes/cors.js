const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:8000', 'https://localhost:8444'];   //list of origins needed
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
        corsOptions = { origin: true };
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);