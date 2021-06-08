var express = require('express');
var router = express.Router();
var httpProxy = require('http-proxy');
// var request = require('request');
var http = require('http');
var apiProxy = httpProxy.createProxyServer();
var querystring = require('querystring');
const request = require('request-promise');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
