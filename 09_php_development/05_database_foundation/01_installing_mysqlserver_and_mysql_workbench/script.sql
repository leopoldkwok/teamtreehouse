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

