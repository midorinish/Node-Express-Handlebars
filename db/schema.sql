CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT(200) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);