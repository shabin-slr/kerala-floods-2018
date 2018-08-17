"use strict";

const express = require("express");
const bodyParser = require('body-parser');
const appRoutes = require("./app/routes");

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', appRoutes());
app.listen(parseInt(process.env.PORT, 10) || 3000, () => {
	console.log("App running");
});