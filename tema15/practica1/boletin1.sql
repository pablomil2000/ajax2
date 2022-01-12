create table marcas 
( id int(4),
 nombre varchar(30));
 
 create table modelos
 (id int(4),
 nombre_m varchar(30),
 id_marca int(4));
 
 insert into marcas values (1,'Volkswagen');
 insert into marcas values (2,'Seat');
 insert into marcas values (3,'Hyundai');
 insert into marcas values (4,'Renault');
 insert into marcas values (5,'Fiat');
 insert into marcas values (6,'Peugeot');
 insert into marcas values (7,'Citroen');
 insert into marcas values (8,'Honda');
 
 insert into modelos values (1,'Golf',1);
 insert into modelos values (2,'Passat',1);
 insert into modelos values (3,'Altea',2);
 insert into modelos values (4,'Atos',3);
 insert into modelos values (5,'Megane',4);
 insert into modelos values (6,'Bravo',5);
 insert into modelos values (7,'307',6);
 insert into modelos values (8,'Toledo',2);
 insert into modelos values (9,'Ibiza',2);
 insert into modelos values (10,'Getz',3);
 insert into modelos values (11,'Leon',2);
 insert into modelos values (12,'California',1);
 insert into modelos values (13,'Picasso',7);
 insert into modelos values (14,'Civic',8);
 insert into modelos values (15,'Beetle',1);
 insert into modelos values (16,'Panda',2);
 insert into modelos values (17,'Tuareg',1);
 insert into modelos values (18,'Accent',3);
 insert into modelos values (19,'Laguna',4);
 insert into modelos values (20,'Space',4);
 insert into modelos values (21,'Croma',5);
 insert into modelos values (22,'407',6);
 insert into modelos values (23,'Xara',7);
 insert into modelos values (24,'Jazz',8);
 insert into modelos values (25,'Polo',1);
 insert into modelos values (26,'Hibrid',8);
 insert into modelos values (27,'Accord',8);
 insert into modelos values (28,'Sedici',5);
 insert into modelos values (29,'Stilo',5);