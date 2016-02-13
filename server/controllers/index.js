var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['text', 'username', 'roomname'];

var responseHeaders = {  
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10,
    "Content-Type": "application/json; charset=utf-8"
};


module.exports = {
  messages: {
    get: function (req, res) {
    	models.messages.get(function(err, results){
    		if(err){
          console.log(err);
        }
    		res.json(results);    		
    	});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
		var params =[ req.body.message, req.body.username, req.body.roomname ];
    
    console.log('Controllers POST PARAMS ', params);
  		
      models.messages.post(params, function(err, results){
        if(err){
          console.log('I am a post error!', err);
        }
  			res.json(results);
  		});
    }, // a function which handles posting a message to the database
    options: function(req,res){
      res.writeHead(200, responseHeaders);
      res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	models.users.get(function(err, results){
        if(err){
          console.log(err);
        }
    		res.json(results);
    	})
    },
    post: function (req, res) {
    	var params = [ req.body.username ];
    	models.users.post(params, function(err, results){
        if(err){
          console.log(err);
        }

        console.log('CONTROLLERS USERS RESULTS: ', res.json(results));

    		res.json(results);
    	});
    },
    options: function(req,res){
      res.writeHead(200, responseHeaders);
      res.end();
    }
  }
};

