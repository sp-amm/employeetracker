ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

flush privileges;

CREATE DATABASE employee2_db;

USE employee2_db;

CREATE TABLE roles (
	id int AUTO_INCREMENT NOT NULL,
    title varchar(30) NOT NULL,
	salary Int NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE department (
	id int AUTO_INCREMENT NOT NULL,
	department varchar(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
	id int AUTO_INCREMENT NOT NULL,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
    roles_id Int NOT NULL,
    department_id Int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (roles_id) REFERENCES roles(id),
	FOREIGN KEY (department_id) REFERENCES department(id)
);
