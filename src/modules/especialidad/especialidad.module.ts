import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { EspecialidadRepository } from './especialidad.repository';
import { EspecialidadService } from './especialidad.service';

@Module({
    imports: [TypeOrmModule.forFeature([EspecialidadRepository]), SharedModule],
    providers: [EspecialidadService]
})
export class EspecialidadModule {}
