import {MigrationInterface, QueryRunner} from "typeorm";

export class firtsMigration1642089282978 implements MigrationInterface {
    name = 'firtsMigration1642089282978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cobradores\` (\`id_cobrador\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(15) NOT NULL, \`apellido\` varchar(20) NOT NULL, \`telefono\` text NOT NULL, PRIMARY KEY (\`id_cobrador\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`descuentos\` (\`id_descuento\` int NOT NULL AUTO_INCREMENT, \`importe\` int NULL, \`porcentaje\` int NULL, \`caducidad\` timestamp NOT NULL, \`observacion\` text NOT NULL, PRIMARY KEY (\`id_descuento\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`especialidades\` (\`id_especialidad\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, PRIMARY KEY (\`id_especialidad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`prestaciones\` (\`codigo_prestacion\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, PRIMARY KEY (\`codigo_prestacion\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`prestadores\` (\`id_prestador\` int NOT NULL AUTO_INCREMENT, \`proveedor\` text NOT NULL, \`formato\` text NOT NULL, \`nombre_medico\` text NOT NULL, \`horario\` text NOT NULL, \`domicilio\` text NOT NULL, \`telefono\` text NOT NULL, \`monto_red_salud\` float NOT NULL, \`importe\` float NOT NULL, \`especialidadIdEspecialidad\` int NOT NULL, UNIQUE INDEX \`REL_84c3fc5faef141764a55267c94\` (\`especialidadIdEspecialidad\`), PRIMARY KEY (\`id_prestador\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ordenes\` (\`id_orden\` int NOT NULL AUTO_INCREMENT, \`tipo\` text NOT NULL, \`fecha_creacion\` datetime NOT NULL, \`prestadorIdPrestador\` int NOT NULL, \`personaIdPersona\` int NULL, UNIQUE INDEX \`REL_70dc485f0f44a3f358441d7374\` (\`prestadorIdPrestador\`), PRIMARY KEY (\`id_orden\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`personas\` (\`id_persona\` int NOT NULL AUTO_INCREMENT, \`num_afiliado\` int NOT NULL, \`nombre\` text NOT NULL, \`apellido\` text NOT NULL, \`fecha_creacion\` timestamp NOT NULL, \`dni\` int NOT NULL, \`estado\` text NOT NULL, \`carencia\` int NOT NULL, \`activo\` tinyint NOT NULL, \`afiliadoIdAfiliado\` int NULL, PRIMARY KEY (\`id_persona\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`planes\` (\`id_plan\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, \`precio\` float NOT NULL, PRIMARY KEY (\`id_plan\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`razones\` (\`id_razon\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, PRIMARY KEY (\`id_razon\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id_rol\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, PRIMARY KEY (\`id_rol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`usuario\` varchar(25) NOT NULL, \`password\` varchar(25) NOT NULL, \`rolIdRol\` int NOT NULL, UNIQUE INDEX \`IDX_f06f84f3f2bc0696d00882fcfa\` (\`usuario\`), UNIQUE INDEX \`REL_ca9287cbd58206f14056ff94ae\` (\`rolIdRol\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cajas\` (\`id_caja\` int NOT NULL AUTO_INCREMENT, \`total\` float NOT NULL, \`usuarioId\` int NOT NULL, UNIQUE INDEX \`REL_777c74388d8734eea88d1cf958\` (\`usuarioId\`), PRIMARY KEY (\`id_caja\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`historiales_caja\` (\`id_historial_caja\` int NOT NULL AUTO_INCREMENT, \`accion\` text NOT NULL, \`importe\` float NOT NULL, \`fecha\` timestamp NOT NULL, \`afiliadoIdAfiliado\` int NOT NULL, \`razonIdRazon\` int NOT NULL, \`cajaIdCaja\` int NULL, UNIQUE INDEX \`REL_4c1cbc810e1d151f51110cbf3f\` (\`afiliadoIdAfiliado\`), UNIQUE INDEX \`REL_cac3158c93a882381f9c314b8e\` (\`razonIdRazon\`), PRIMARY KEY (\`id_historial_caja\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`recibos\` (\`id_recibo\` int NOT NULL AUTO_INCREMENT, \`fecha_creacion\` timestamp NOT NULL, \`fecha_cobro\` timestamp NOT NULL, \`mes_recibo\` text NOT NULL, \`anio_recibo\` text NOT NULL, \`historialCajaIdHistorialCaja\` int NOT NULL, \`afiliadoIdAfiliado\` int NULL, UNIQUE INDEX \`REL_c657639599715e6a010ee4a168\` (\`historialCajaIdHistorialCaja\`), PRIMARY KEY (\`id_recibo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vendedores\` (\`id_vendedor\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(15) NOT NULL, \`apellido\` varchar(20) NOT NULL, \`telefono\` text NOT NULL, PRIMARY KEY (\`id_vendedor\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`localidades\` (\`id_localidad\` int NOT NULL AUTO_INCREMENT, \`nombre\` text NOT NULL, PRIMARY KEY (\`id_localidad\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`barrios\` (\`id_barrio\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, \`localidadIdLocalidad\` int NULL, PRIMARY KEY (\`id_barrio\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`detalle_afiliado\` (\`id_detalle\` int NOT NULL AUTO_INCREMENT, \`calle\` text NOT NULL, \`numero\` int NOT NULL, \`observacion\` text NULL, \`barrioIdBarrio\` int NOT NULL, UNIQUE INDEX \`REL_ed4bb07629d197368997fe93a4\` (\`barrioIdBarrio\`), PRIMARY KEY (\`id_detalle\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`afiliados\` (\`id_afiliado\` int NOT NULL AUTO_INCREMENT, \`fecha_creacion\` timestamp NOT NULL, \`fecha_venta\` timestamp NOT NULL, \`fecha_cobro\` int NOT NULL, \`importe\` int NOT NULL, \`estado\` text NOT NULL, \`detalleIdDetalle\` int NOT NULL, \`descuentoIdDescuento\` int NULL, \`cobradorIdCobrador\` int NOT NULL, \`vendedorIdVendedor\` int NOT NULL, \`planIdPlan\` int NOT NULL, UNIQUE INDEX \`REL_e7533031d907e77ca9e8b0a315\` (\`detalleIdDetalle\`), UNIQUE INDEX \`REL_ae0155cd7f4694c4266ea7befb\` (\`descuentoIdDescuento\`), UNIQUE INDEX \`REL_9ee99f263cb353636ad54d8f01\` (\`cobradorIdCobrador\`), UNIQUE INDEX \`REL_6de23ff10478813ed82a8d1d32\` (\`vendedorIdVendedor\`), UNIQUE INDEX \`REL_58512db94983a3303f9fbb8a0c\` (\`planIdPlan\`), PRIMARY KEY (\`id_afiliado\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`prestador_prestacion\` (\`prestadoresIdPrestador\` int NOT NULL, \`prestacionesCodigoPrestacion\` int NOT NULL, INDEX \`IDX_ad3ef708a1b148af8dbde4f63c\` (\`prestadoresIdPrestador\`), INDEX \`IDX_57b620f1be88a893b97880ab92\` (\`prestacionesCodigoPrestacion\`), PRIMARY KEY (\`prestadoresIdPrestador\`, \`prestacionesCodigoPrestacion\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`prestadores\` ADD CONSTRAINT \`FK_84c3fc5faef141764a55267c947\` FOREIGN KEY (\`especialidadIdEspecialidad\`) REFERENCES \`especialidades\`(\`id_especialidad\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ordenes\` ADD CONSTRAINT \`FK_70dc485f0f44a3f358441d7374f\` FOREIGN KEY (\`prestadorIdPrestador\`) REFERENCES \`prestadores\`(\`id_prestador\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ordenes\` ADD CONSTRAINT \`FK_25362258a9648ae8a6750b67697\` FOREIGN KEY (\`personaIdPersona\`) REFERENCES \`personas\`(\`id_persona\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`personas\` ADD CONSTRAINT \`FK_9c351989e7434d9bfdc053e8832\` FOREIGN KEY (\`afiliadoIdAfiliado\`) REFERENCES \`afiliados\`(\`id_afiliado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_ca9287cbd58206f14056ff94aea\` FOREIGN KEY (\`rolIdRol\`) REFERENCES \`roles\`(\`id_rol\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cajas\` ADD CONSTRAINT \`FK_777c74388d8734eea88d1cf9587\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`historiales_caja\` ADD CONSTRAINT \`FK_4c1cbc810e1d151f51110cbf3fc\` FOREIGN KEY (\`afiliadoIdAfiliado\`) REFERENCES \`afiliados\`(\`id_afiliado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`historiales_caja\` ADD CONSTRAINT \`FK_cac3158c93a882381f9c314b8e2\` FOREIGN KEY (\`razonIdRazon\`) REFERENCES \`razones\`(\`id_razon\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`historiales_caja\` ADD CONSTRAINT \`FK_e623b0ed9ae9f87fd7b40564e1c\` FOREIGN KEY (\`cajaIdCaja\`) REFERENCES \`cajas\`(\`id_caja\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`recibos\` ADD CONSTRAINT \`FK_c657639599715e6a010ee4a168c\` FOREIGN KEY (\`historialCajaIdHistorialCaja\`) REFERENCES \`historiales_caja\`(\`id_historial_caja\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`recibos\` ADD CONSTRAINT \`FK_6ee2884e0006bd44e0bf8e5eb4a\` FOREIGN KEY (\`afiliadoIdAfiliado\`) REFERENCES \`afiliados\`(\`id_afiliado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`barrios\` ADD CONSTRAINT \`FK_cc97ac2044f283ba334298312f2\` FOREIGN KEY (\`localidadIdLocalidad\`) REFERENCES \`localidades\`(\`id_localidad\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_afiliado\` ADD CONSTRAINT \`FK_ed4bb07629d197368997fe93a42\` FOREIGN KEY (\`barrioIdBarrio\`) REFERENCES \`barrios\`(\`id_barrio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`afiliados\` ADD CONSTRAINT \`FK_e7533031d907e77ca9e8b0a315e\` FOREIGN KEY (\`detalleIdDetalle\`) REFERENCES \`detalle_afiliado\`(\`id_detalle\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`afiliados\` ADD CONSTRAINT \`FK_ae0155cd7f4694c4266ea7befb3\` FOREIGN KEY (\`descuentoIdDescuento\`) REFERENCES \`descuentos\`(\`id_descuento\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`afiliados\` ADD CONSTRAINT \`FK_9ee99f263cb353636ad54d8f01e\` FOREIGN KEY (\`cobradorIdCobrador\`) REFERENCES \`cobradores\`(\`id_cobrador\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`afiliados\` ADD CONSTRAINT \`FK_6de23ff10478813ed82a8d1d320\` FOREIGN KEY (\`vendedorIdVendedor\`) REFERENCES \`vendedores\`(\`id_vendedor\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`afiliados\` ADD CONSTRAINT \`FK_58512db94983a3303f9fbb8a0ca\` FOREIGN KEY (\`planIdPlan\`) REFERENCES \`planes\`(\`id_plan\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`prestador_prestacion\` ADD CONSTRAINT \`FK_ad3ef708a1b148af8dbde4f63c2\` FOREIGN KEY (\`prestadoresIdPrestador\`) REFERENCES \`prestadores\`(\`id_prestador\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`prestador_prestacion\` ADD CONSTRAINT \`FK_57b620f1be88a893b97880ab92f\` FOREIGN KEY (\`prestacionesCodigoPrestacion\`) REFERENCES \`prestaciones\`(\`codigo_prestacion\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`prestador_prestacion\` DROP FOREIGN KEY \`FK_57b620f1be88a893b97880ab92f\``);
        await queryRunner.query(`ALTER TABLE \`prestador_prestacion\` DROP FOREIGN KEY \`FK_ad3ef708a1b148af8dbde4f63c2\``);
        await queryRunner.query(`ALTER TABLE \`afiliados\` DROP FOREIGN KEY \`FK_58512db94983a3303f9fbb8a0ca\``);
        await queryRunner.query(`ALTER TABLE \`afiliados\` DROP FOREIGN KEY \`FK_6de23ff10478813ed82a8d1d320\``);
        await queryRunner.query(`ALTER TABLE \`afiliados\` DROP FOREIGN KEY \`FK_9ee99f263cb353636ad54d8f01e\``);
        await queryRunner.query(`ALTER TABLE \`afiliados\` DROP FOREIGN KEY \`FK_ae0155cd7f4694c4266ea7befb3\``);
        await queryRunner.query(`ALTER TABLE \`afiliados\` DROP FOREIGN KEY \`FK_e7533031d907e77ca9e8b0a315e\``);
        await queryRunner.query(`ALTER TABLE \`detalle_afiliado\` DROP FOREIGN KEY \`FK_ed4bb07629d197368997fe93a42\``);
        await queryRunner.query(`ALTER TABLE \`barrios\` DROP FOREIGN KEY \`FK_cc97ac2044f283ba334298312f2\``);
        await queryRunner.query(`ALTER TABLE \`recibos\` DROP FOREIGN KEY \`FK_6ee2884e0006bd44e0bf8e5eb4a\``);
        await queryRunner.query(`ALTER TABLE \`recibos\` DROP FOREIGN KEY \`FK_c657639599715e6a010ee4a168c\``);
        await queryRunner.query(`ALTER TABLE \`historiales_caja\` DROP FOREIGN KEY \`FK_e623b0ed9ae9f87fd7b40564e1c\``);
        await queryRunner.query(`ALTER TABLE \`historiales_caja\` DROP FOREIGN KEY \`FK_cac3158c93a882381f9c314b8e2\``);
        await queryRunner.query(`ALTER TABLE \`historiales_caja\` DROP FOREIGN KEY \`FK_4c1cbc810e1d151f51110cbf3fc\``);
        await queryRunner.query(`ALTER TABLE \`cajas\` DROP FOREIGN KEY \`FK_777c74388d8734eea88d1cf9587\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_ca9287cbd58206f14056ff94aea\``);
        await queryRunner.query(`ALTER TABLE \`personas\` DROP FOREIGN KEY \`FK_9c351989e7434d9bfdc053e8832\``);
        await queryRunner.query(`ALTER TABLE \`ordenes\` DROP FOREIGN KEY \`FK_25362258a9648ae8a6750b67697\``);
        await queryRunner.query(`ALTER TABLE \`ordenes\` DROP FOREIGN KEY \`FK_70dc485f0f44a3f358441d7374f\``);
        await queryRunner.query(`ALTER TABLE \`prestadores\` DROP FOREIGN KEY \`FK_84c3fc5faef141764a55267c947\``);
        await queryRunner.query(`DROP INDEX \`IDX_57b620f1be88a893b97880ab92\` ON \`prestador_prestacion\``);
        await queryRunner.query(`DROP INDEX \`IDX_ad3ef708a1b148af8dbde4f63c\` ON \`prestador_prestacion\``);
        await queryRunner.query(`DROP TABLE \`prestador_prestacion\``);
        await queryRunner.query(`DROP INDEX \`REL_58512db94983a3303f9fbb8a0c\` ON \`afiliados\``);
        await queryRunner.query(`DROP INDEX \`REL_6de23ff10478813ed82a8d1d32\` ON \`afiliados\``);
        await queryRunner.query(`DROP INDEX \`REL_9ee99f263cb353636ad54d8f01\` ON \`afiliados\``);
        await queryRunner.query(`DROP INDEX \`REL_ae0155cd7f4694c4266ea7befb\` ON \`afiliados\``);
        await queryRunner.query(`DROP INDEX \`REL_e7533031d907e77ca9e8b0a315\` ON \`afiliados\``);
        await queryRunner.query(`DROP TABLE \`afiliados\``);
        await queryRunner.query(`DROP INDEX \`REL_ed4bb07629d197368997fe93a4\` ON \`detalle_afiliado\``);
        await queryRunner.query(`DROP TABLE \`detalle_afiliado\``);
        await queryRunner.query(`DROP TABLE \`barrios\``);
        await queryRunner.query(`DROP TABLE \`localidades\``);
        await queryRunner.query(`DROP TABLE \`vendedores\``);
        await queryRunner.query(`DROP INDEX \`REL_c657639599715e6a010ee4a168\` ON \`recibos\``);
        await queryRunner.query(`DROP TABLE \`recibos\``);
        await queryRunner.query(`DROP INDEX \`REL_cac3158c93a882381f9c314b8e\` ON \`historiales_caja\``);
        await queryRunner.query(`DROP INDEX \`REL_4c1cbc810e1d151f51110cbf3f\` ON \`historiales_caja\``);
        await queryRunner.query(`DROP TABLE \`historiales_caja\``);
        await queryRunner.query(`DROP INDEX \`REL_777c74388d8734eea88d1cf958\` ON \`cajas\``);
        await queryRunner.query(`DROP TABLE \`cajas\``);
        await queryRunner.query(`DROP INDEX \`REL_ca9287cbd58206f14056ff94ae\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_f06f84f3f2bc0696d00882fcfa\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`razones\``);
        await queryRunner.query(`DROP TABLE \`planes\``);
        await queryRunner.query(`DROP TABLE \`personas\``);
        await queryRunner.query(`DROP INDEX \`REL_70dc485f0f44a3f358441d7374\` ON \`ordenes\``);
        await queryRunner.query(`DROP TABLE \`ordenes\``);
        await queryRunner.query(`DROP INDEX \`REL_84c3fc5faef141764a55267c94\` ON \`prestadores\``);
        await queryRunner.query(`DROP TABLE \`prestadores\``);
        await queryRunner.query(`DROP TABLE \`prestaciones\``);
        await queryRunner.query(`DROP TABLE \`especialidades\``);
        await queryRunner.query(`DROP TABLE \`descuentos\``);
        await queryRunner.query(`DROP TABLE \`cobradores\``);
    }

}
