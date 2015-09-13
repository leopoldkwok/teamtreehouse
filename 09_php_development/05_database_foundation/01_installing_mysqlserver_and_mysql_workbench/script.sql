select * from movies;

select * from actors;

select  title FROM movies;

select * from movies where title LIKE "%godfather%"; 

select * from movies order by year;

select * from movies order by year DESC;

select * from movies order by year ASC;

select * from movies order by year ASC, title DESC;

select * from movies limit 10;

select * from movies limit 10 offset 10;

select * from movies limit 20 offset 10;

select * from movies where year is null;

select * from movies order by year;

select * from movies where year is not null order by year;

use movie_db_1;

create schema if not exists movie_db_1;

create database if not exists movie_db_2;

create table actors (name varchar(50)NOT NULL);

create table movies (title varchar(200) NOT NULL, year INTEGER NULL)ENGINE InnoDB;