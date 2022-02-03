-- to create a new database
DROP DATABASE IF EXISTS crudnodejsmysql;
CREATE DATABASE crudnodejsmysql;
use crudnodejsmysql;

-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR(50)   NOT NULL,
  apellido VARCHAR(50),
  address  VARCHAR(100),
  phone    VARCHAR(15)
);

insert into customer( name, address ) values
("marta", "mayor 4"),
("maria", "gran via 22");

insert into customer( id, name ) values
(100, "laura"),
(666, "luz");

-- -------------------------------------------------------
DROP TABLE IF EXISTS vehiculo;
CREATE TABLE vehiculo (
  bastidor MEDIUMINT primary key NOT NULL AUTO_INCREMENT,
  modelo   varchar(25) not null,
  año      varchar(25) not null
);

insert into vehiculo( modelo, año ) values
("chevrolet camaro", 1999),
("ford torino",      1982),
("audi a7",          2015);

insert into vehiculo( bastidor, modelo, año ) values
(666,  "lamborghini diablo", 2005),
(2357, "ford focus",         2005);

-- to show all tables
show tables;
-- to describe table
describe customer;

-- select * from customer;
select * from vehiculo;


