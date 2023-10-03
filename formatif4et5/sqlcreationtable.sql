
set sql_require_primary_key = off;
create table defaultdb.cars(
	id int(10) not null,
	marque varchar(100),
    typeDeChar varchar(100)
);

insert into defaultdb.cars (id,marque,typeDeChar) values (1,'volvo','sport');

select * from defaultdb.cars;