CREATE DATABASE chat;

USE chat;


DROP TABLE IF EXISTS `userTable`;
		
CREATE TABLE `userTable` (
  `id` INTEGER(20) AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(15),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messageTable'
-- 
-- ---

DROP TABLE IF EXISTS `messageTable`;
		
CREATE TABLE `messageTable` (
  `id` INTEGER(20) AUTO_INCREMENT NOT NULL,
  `messages` VARCHAR(50),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'roomTable'
-- 
-- ---

DROP TABLE IF EXISTS `roomTable`;
		
CREATE TABLE `roomTable` (
  `id` INTEGER(20) AUTO_INCREMENT NOT NULL,
  `roomname` VARCHAR(20),
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messageTable` ADD FOREIGN KEY (id) REFERENCES `userTable` (`id`);
ALTER TABLE `messageTable` ADD FOREIGN KEY (id) REFERENCES `roomTable` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `userTable` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messageTable` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `roomTable` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `userTable` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `messageTable` (`id`,`messages`) VALUES
-- ('','');
-- INSERT INTO `roomTable` (`id`,`roomname`) VALUES
-- ('','');