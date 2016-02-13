var db = require('../db');
var connection = db.connection;

connection.connect();

//this is my next step, work my way from the database 




// 'SELECT messages.id, messages.text, messages.roomname FROM messages AS messages INNER JOIN users AS messages ON messages.id = users.id'
module.exports = {
  messages: {
    get: function (callback) {
            //see if there is a better way to get
        // console.log('MODELS get function ', userID);
    	var queryStr =  "select messages.id, messages.text, messages.roomname, users.username from messages \
                         left outer join users on (messages.userid = users.id) \
                         order by messages.id desc";
    	connection.query(queryStr, function(err, results){
    		callback(err, results);
    	});
    }, // a function which produces all the messages
    post: function (params, callback) {
        console.log('Models: POST messagesParams', params);
        ///Maybe add a join?
        //Maybe username should equal username
        var hold = 'select user.id from users';
        // console.log('hold', hold);
    	 var queryStr = "insert into messages(text, userid, roomname) \
    	 				values (?,(select id from users where username = ? limit 1), ?)";

    	 connection.query(queryStr, params, callback);
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
