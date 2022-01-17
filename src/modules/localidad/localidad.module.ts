import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { LocalidadRepository } from './localidad.repository';
import { LocalidadService } from './localidad.service';

@Module({
    imports: [TypeOrmModule.forFeature([LocalidadRepository]), SharedModule],
    providers: [LocalidadService]
})
export class LocalidadModule {}
