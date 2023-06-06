Drop DATABASE IF EXISTS universidad;
CREATE DATABASE universidad;
USE universidad;


CREATE TABLE Universidades (
  idUni INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nombre VARCHAR(50)  NOT NULL  ,
  direccion VARCHAR(50)  NOT NULL  ,
  nSalones INTEGER UNSIGNED  NOT NULL  ,
  ciudad VARCHAR(50)  NOT NULL    ,
PRIMARY KEY(idUni));



CREATE TABLE Salones (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  idUni INTEGER UNSIGNED  NOT NULL  ,
  modelo VARCHAR(50)  NOT NULL  ,
  ubicacion VARCHAR(50)  NOT NULL  ,
  capacidad INTEGER UNSIGNED  NOT NULL  ,
  tipo VARCHAR(50)  NOT NULL    ,
PRIMARY KEY(id),
  FOREIGN KEY(idUni)
    REFERENCES Universidades(idUni)
      ON DELETE RESTRICT
      ON UPDATE CASCADE);

INSERT INTO Universidades (nombre, direccion, nSalones, ciudad) VALUES("Universidad de Córdoba", "cr xx", 100, "MONTERÍA");

