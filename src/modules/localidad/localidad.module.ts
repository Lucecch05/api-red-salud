import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { LocalidadRepository } from './localidad.repository';
import { LocalidadService } from './localidad.service';
import { LocalidadController } from './localidad.controller';

@Module({
    imports: [TypeOrmModule.forFeature([LocalidadRepository]), SharedModule],
    providers: [LocalidadService],
    controllers: [LocalidadController]
})
export class LocalidadModule {}
