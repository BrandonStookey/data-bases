var db = require('../db');


//this is my next step, work my way from the database 

module.exports = {
  messages: {
    get: function (callbacks) {
    	var queryStr = "select messages.id, messages.text, messages.roomname from messages \
    					left outer join users on (messages.userid = users.id) \
    					order by messages.id desc";
    	db.query(queryStr, function(err, results){
    		callback(results);
    	});
    }, // a function which produces all the messages
    post: function (params, callbacks) {
    	 var queryStr = "insert into messages(text,userid, rommname) \
    	 				values(?, (select id from users where username = ? limit 1), ?)"
    	 db.query(queryStr, params, function(err, results){
    	 	callback(results);
    	 });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
    	var queryStr = "select * from users";
    	db.query(queryStr, function(err, results){
    		callback(results);
    	});
    },
    post: function (params, callback) {
    	var queryStr = "insert into users(username) values (?)";
    	db.query(queryStr, function(err, results){
    		callback(results);
    	});
  		}
	}	
};
