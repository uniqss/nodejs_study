create database if not exists node_test  default charset utf8mb4;

use node_test;

create table test1(
id int not null,
name varchar(32),
score int not null default 0,
primary key(id));

