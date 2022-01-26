

insert into roles(descripcion) VALUES ('ADMIN')
insert into roles(descripcion) VALUES ('GENERAL')
insert into roles(descripcion) VALUES ('CAJA');


INSERT INTO cobradores(nombre,apellido,telefono) VALUES ('Lucho','Gonzalez','12365478')
INSERT INTO cobradores(nombre,apellido,telefono) VALUES ('Pablin','Perez','32154578');

INSERT INTO cajas(total,usuarioId) VALUES (0,2);

INSERT INTO razones(descripcion) VALUES ('Pago de luz')
INSERT INTO razones(descripcion) VALUES ('Paga orden');

INSERT INTO historiales_caja(afiliadoIdAfiliado,razonIdRazon,cajaIdCaja,accion,importe,fecha) VALUES (1,2,1,'ingreso',500,'25/01/2022');

INSERT INTO especialidades(descripcion) VALUES ("Odontología")
INSERT INTO especialidades(descripcion) VALUES ("Medico clinico");

INSERT INTO prestaciones(descripcion) VALUES ("Consulta")
INSERT INTO prestaciones(descripcion) VALUES ("Arreglo");

