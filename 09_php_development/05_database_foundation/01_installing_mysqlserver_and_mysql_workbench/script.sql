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

insert into movies (title, year) values("Avatar", 2009);

insert into movies (year, title) values( 2009, "Avatar"), (NULL,"Avatar 2");

insert into movies SET title="Back to the Future", year = 1985;

select * from movies

set sql_safe_updates = 1;
update movies set year=2015 where title="Avatar 2";
update movies set year=2016, title="Avatar Reloaded" where title="Avatar 2";

delete from movies where title="Avatar Reloaded" and year =2016;

rename table movies to movie_table, actors to actor_table;

drop table if exists reviews;

truncate actor_table;

ALTER TABLE movie_table ADD column genre varchar(100);

ALTER TABLE actor_table ADD (pob varchar(100), dob date);

ALTER TABLE actor_table change column pob place_of_birth varchar(100);
ALTER TABLE actor_table change column dob date_of_birth date;

ALTER TABLE movie_table change year year_released YEAR;

ALTER TABLE actor_table DROP date_of_birth; 

DROP DATABASE movie_db_3;

DROP SCHEMA movie_db_3;

DROP SCHEMA IF EXISTS movie_db_2;

use treehouse_movie_db;

CREATE TABLE genres (id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(30) NOT NULL UNIQUE KEY);

INSERT INTO genres (name) VALUES("Sci Fi");
INSERT INTO genres (name) VALUES("Muscial");
INSERT INTO genres (name) VALUES("Action");

select * from genres;

select * from movies;

alter table movies add column id INTEGER AUTO_INCREMENT PRIMARY KEY FIRST;

alter table movies 
add column genre_id INTEGER NULL, 
ADD CONSTRAINT FOREIGN KEY(genre_id) REFERENCES genres(id);

select * from movies;
select * from genres;

update movies SET genre_id = 1 where id= 8 or id =9;

select * from movies;


SELECT * FROM movies LEFT OUTER JOIN genres ON movies.genre_id = genres.id;

SELECT * FROM movies RIGHT OUTER JOIN genres ON movies.genre_id = genres.id;

SELECT movies.title AS movie_title, genres.name AS genre_name 
FROM movies LEFT OUTER JOIN genres 
ON movies.genre_id = genres.id
WHERE name IS NOT NULL;

SELECT movies.title AS movie_title, genres.name AS genre_name 
FROM movies LEFT OUTER JOIN genres 
ON movies.genre_id = genres.id
WHERE genres.id = 1;



use treehouse_movie_db

SELECT * FROM movies LIMIT 1;

select * from reviews where movie_id = 1;

select count(*) from reviews where movie_id = 1;

select count(id) from reviews where movie_id = 1;
 
select count(id) as review_count from reviews where movie_id = 1;

select min(score) as minimum_score from reviews where movie_id = 1;

select min(score) as minimum_score, max(score) as maximum_score from reviews where movie_id = 1;

select min(score) as minimum_score, max(score) as maximum_score, sum(score)  from reviews where movie_id = 1;

select min(score) as minimum_score, max(score) as maximum_score, sum(score) + 1 from reviews where movie_id = 1;

select min(score) as minimum_score, max(score) as maximum_score, sum(score) / count(score) as AVERAGE from reviews where movie_id = 1;

select min(score) as minimum_score, 
max(score) as maximum_score, 
AVG(score) as average 
from reviews where movie_id = 1;

select min(score) as minimum_score, 
max(score) as maximum_score, 
AVG(score) as average 
from reviews;

select movie_id, min(score) as minimum_score, 
max(score) as maximum_score, 
AVG(score) as average 
from reviews /* only displays the first record*/

select movie_id, min(score) as minimum_score, 
max(score) as maximum_score, 
AVG(score) as average 
from reviews group by movie_id;

select title, min(score) as minimum_score, 
max(score) as maximum_score, 
AVG(score) as average 
from movies join reviews 
on movies.id = reviews.movie_id
group by movie_id;

select title, min(score) as minimum_score, 
max(score) as maximum_score, 
AVG(score) as average 
from movies left outer join reviews 
on movies.id = reviews.movie_id
group by movie_id;

select title, min(score) as minimum_score, 
max(score) as maximum_score, 
IFNULL(AVG(score),0) as average 
from movies left outer join reviews 
on movies.id = reviews.movie_id
group by movie_id;

select title, min(score) as minimum_score, 
max(score) as maximum_score, 
IFNULL(AVG(score),0) as average 
from movies left outer join reviews 
on movies.id = reviews.movie_id
group by movie_id having average > 3; /* having is the where aggregate */

select title, min(score) as minimum_score, 
max(score) as maximum_score, 
IFNULL(AVG(score),0) as average 
from movies left outer join reviews 
on movies.id = reviews.movie_id
WHERE year_released > 2000
group by movie_id having average > 3; 

select * from users;

select first_name, last_name, email from users;

select first_name, last_name, lower(email) from users;

select first_name, upper(last_name), lower(email) from users;

select first_name, 
upper(last_name), lower(email), length(username) as username_length 
from users having username_length < 19;

select concat(first_name," ", upper(last_name)) as full_name, 
lower(email), length(username) as username_length 
from users having username_length < 19;

select concat(first_name," ", upper(last_name)) as full_name, 
SUBSTRING(lower(email),1, 10) AS partial_email, 
length(username) as username_length 
from users having username_length < 19;

select concat(first_name," ", upper(last_name)) as full_name, 
CONCAT(SUBSTRING(lower(email),1, 10), "...") AS partial_email, 
length(username) as username_length 
from users having username_length < 19;

#user1 - read access

GRANT SELECT 
ON treehouse_movie_db.*
TO user1@'%'
IDENTIFIED BY 'password'; 

FLUSH PRIVILEGES; /* resets and reloads all users privileges for this database' */

#USER 2 - READ - WRITE ACCESS

GRANT SELECT, INSERT, UPDATE, DELETE
ON treehouse_movie_db.*
TO user2@'%'
IDENTIFIED BY 'password';

FLUSH PRIVILEGES;

#user 3 - DDL

GRANT ALTER, CREATE, DROP
ON treehouse_movie_db.*
TO user3@'%'
IDENTIFIED BY 'password';

flush PRIVILEGES;

select * from movies;

select * from users;


select * from users where last_name = 'Chalkley';

EXPLAIN select * from users where last_name = 'Chalkley';

CREATE INDEX last_name_idx ON users(last_name);

select * from users WHERE last_name = "Chalkley";

EXPLAIN select * from users WHERE last_name = "Chalkley";

INSERT INTO users (username, email, first_name, last_name)
VALUES ("henry", "henry@email.com", "Henry","Chalkley");

EXPLAIN select * from users WHERE first_name = "Andrew" AND last_name = "Chalkley";