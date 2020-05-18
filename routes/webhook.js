var express = require('express');
var http = require('https');
const request = require('request');
var router = express.Router();
const db = require('./postgresql');

router.post('/', function(req, response, next) {
  const data = {};
  const resSet = response.body;

  res.on('finish', () => console.log(res));

  if(resSet != null && resSet.id != null){
    data["hookid"] = resSet.id;
    data["create_time"] = resSet.create_time;
    data["event_type"] = resSet.event_type;
    data["summary"] = resSet.summary;

    console.log(data)

    db.createData(data).then(() => {
      response.sendStatus(200);
    });
  } else{
    response.send("Parameters needed.");
  }
});

module.exports = router;
