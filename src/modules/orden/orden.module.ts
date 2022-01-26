import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { OrdenRepository } from './orden.repository';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';

@Module({
    imports: [TypeOrmModule.forFeature([OrdenRepository]), SharedModule],
    providers: [OrdenService],
    controllers: [OrdenController]
})
export class OrdenModule {}
