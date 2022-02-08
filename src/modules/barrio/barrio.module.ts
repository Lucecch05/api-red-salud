import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { BarrioRepository } from './barrio.repository';
import { BarrioService } from './barrio.service';
import { BarrioController } from './barrio.controller';

@Module({
    imports: [TypeOrmModule.forFeature([BarrioRepository]), SharedModule],
    providers: [BarrioService],
    controllers: [BarrioController]
})
export class BarrioModule {}
