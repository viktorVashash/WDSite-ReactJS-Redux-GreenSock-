"use strict";

var express = require('express');
var loger = require('morgan');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static(__dirname + '/public'));
app.use(loger('dev'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', function () {
  console.log('Server successfully started: ' + PORT);
});
