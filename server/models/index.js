var db = require('../db');
var connection = db.connection;

connection.connect();

//this is my next step, work my way from the database 

module.exports = {
  messages: {
    get: function (callback) {
    	var queryStr = "select messages.id, messages.messages, messages.roomname, users.username from messages \
    					left outer join users on (messages.userid = users.id) \
    					order by messages.id desc";
    	connection.query(queryStr, function(err, results){
    		callback(results);
    	});
    }, // a function which produces all the messages
    post: function (params, callback) {
    	 var queryStr = "insert into messages(message, userid, roomname) \
    	 				values (?, (select id from users where username = ? limit 1), ?)"
    	 connection.query(queryStr, params, function(err, results){
    	 	if(err){
                console.log(err);
            };
            callback(results);
    	 });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
    	var queryStr = "select * from users";
        connection.query(queryStr, function(err, results){
    		callback(results);
    	});
    },
    post: function (params, callback) {
    	var queryStr = "insert into users(username) values (?)";
    	connection.query(queryStr, params, function(err, results){
    		callback(results);
    	});
  		}
	}	
};
