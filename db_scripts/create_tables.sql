CREATE DATABASE IF NOT EXISTS valzebnik;

USE valzebnik;

CREATE TABLE CONTACT
(
	ID 			INT UNSIGNED 	NOT NULL AUTO_INCREMENT PRIMARY KEY,
	NAME 		VARCHAR(25) 	NOT NULL,
	EMAIL 		VARCHAR(25)		NOT NULL,
	WEBSITE 	VARCHAR(50)		NULL,
    MESSAGE     TEXT(65535)  	NOT NULL
);

/*CREATE TABLE SHOP_TYPES
(
	ID 		INT UNSIGNED 	NOT NULL PRIMARY KEY,
	TYPE 	VARCHAR(25) 	NOT NULL
);

CREATE TABLE SHOPS
(
	ID 			INT UNSIGNED 	NOT NULL AUTO_INCREMENT PRIMARY KEY,
	CITY_ID 	INT UNSIGNED 	NOT NULL,
	NAME 		VARCHAR(25) 	NOT NULL,
	INFO 		VARCHAR(50)		NULL,
	ADDRESS 	VARCHAR(50)		NULL,
	EMAIL 		VARCHAR(50)		NULL,
	PHONE 		VARCHAR(15)		NULL,
	WEBPAGE 	VARCHAR(50)		NULL,
	TYPE 		NUMERIC(1, 0)	NOT NULL,
	PROMOTED 	BOOLEAN			NOT NULL,
	LATITUDE 	DOUBLE 			NOT NULL,
	LONGITUDE	DOUBLE 			NOT NULL,
	FOREIGN KEY (CITY_ID) REFERENCES CITYS(ID)
                      ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (TYPE) REFERENCES SHOP_TYPES(ID)
                      ON UPDATE CASCADE ON DELETE RESTRICT
);
*/

