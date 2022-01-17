import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { OrdenRepository } from './orden.repository';
import { OrdenService } from './orden.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrdenRepository]), SharedModule],
    providers: [OrdenService]
})
export class OrdenModule {}
