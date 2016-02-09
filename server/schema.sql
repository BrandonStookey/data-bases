CREATE DATABASE chat;

USE chat;
		
-- CREATE TABLE messages (
--   'id' int NOT NULL AUTO_INCREMENT,
--   'userid' int NOT NULL,
--   'text' varchar(200) NOT NULL,
--   'roomname' varchar(20),
--   PRIMARY KEY (ID)
-- );

    
-- CREATE TABLE users (
--   'id' int AUTO_INCREMENT NOT NULL,
--   'username' varchar(40),
--   PRIMARY KEY (ID)
-- );

  

   /* Describe your table here.*/

 CREATE TABLE messages (
   id int(20) NOT NULL AUTO_INCREMENT,
   userid int NOT NULL,
   message varchar(50) NOT NULL,
   roomname varchar(200),
   PRIMARY KEY (ID)
 );

 		
 CREATE TABLE users (
   id int(20) NOT NULL AUTO_INCREMENT,
   username varchar(15) NOT NULL,
   PRIMARY KEY (`id`)
 );

 		




  
 -- ALTER TABLE `messageTable` ADD FOREIGN KEY (id) REFERENCES `userTable` (`id`);
 -- ALTER TABLE `messageTable` ADD FOREIGN KEY (id) REFERENCES `roomTable` (`id`);
  