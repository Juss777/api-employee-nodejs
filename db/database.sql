CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

SHOW TABLES;

describe employee;

INSERT INTO employee VALUES 
    (1, 'Joe', 1000),
    (2, 'Henry', 1500),
    (3, 'Sam', 1300),
    (4, 'Max', 2000),
    (5, 'Jeff', 1800),