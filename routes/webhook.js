var express = require('express');
var http = require('https');
const request = require('request');
var router = express.Router();
const db = require('./postgresql');

router.post('/', function(req, response, next) {
  const data = {};

  console.log(response);

  if(response != null && response.id != null){
    data["hookid"] = response.id;
    data["create_time"] = response.create_time;
    data["event_type"] = response.event_type;
    data["summary"] = response.summary;

    console.log(data);

    db.createData(data).then(() => {
      response.sendStatus(200);
    });
  } else{
    response.send("Parameters needed.");
  }
  
  
});

module.exports = router;
