CREATE DATABASE chat;

USE chat;
		
CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200) NOT NULL,
  roomname VARCHAR(50),
  PRIMARY KEY (ID)
);

    
CREATE TABLE users (
  id int(20) AUTO_INCREMENT NOT NULL,
  username varchar(15),
  PRIMARY KEY (ID)
);
