import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SharedModule } from "../../shared/shared.module";
import { DetalleAfiliadoController } from "./detalle_afiliado.controller";
import { DetalleAfiliadoRepository } from "./detalle_afiliado.repository";
import { DetalleAfiliadoService } from "./detalle_afilliado.service";

@Module({
    imports: [TypeOrmModule.forFeature([DetalleAfiliadoRepository]), SharedModule],
    providers: [DetalleAfiliadoService],
    controllers: [DetalleAfiliadoController]
})
export class DetalleAfiliadoModule {}