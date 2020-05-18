var express = require('express');
var http = require('https');
const request = require('request');
var router = express.Router();
const db = require('./postgresql');

router.post('/', function(req, response, next) {
  const data = {};

  if(response != null){
    // data["hookid"] = response.id;
    // data["create_time"] = response.create_time;
    // data["event_type"] = response.event_type;
    // data["summary"] = response.summary;

    data["hookid"] = 'sfds';
    data["create_time"] = 'response.create_time';
    data["event_type"] = 'ponse.event_types';
    data["summary"] = 'response.summary';

    db.createData(data);

    response.sendStatus(200);
  } else{
    response.send("Parameters needed.");
  }
  
  
});

module.exports = router;
