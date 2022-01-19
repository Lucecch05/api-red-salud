import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { PrestadorRepository } from './prestador.repository';
import { PrestadorService } from './prestador.service';

@Module({
    imports: [TypeOrmModule.forFeature([PrestadorRepository]), SharedModule],
    providers: [PrestadorService]
})
export class PrestadorModule {}
