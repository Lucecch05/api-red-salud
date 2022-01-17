import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { BarrioRepository } from './barrio.repository';
import { BarrioService } from './barrio.service';

@Module({
    imports: [TypeOrmModule.forFeature([BarrioRepository]), SharedModule],
    providers: [BarrioService]
})
export class BarrioModule {}
