import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { ReciboRepository } from './recibo.repository';
import { ReciboService } from './recibo.service';
import { ReciboController } from './recibo.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ReciboRepository]), SharedModule],
    providers: [ReciboService],
    controllers: [ReciboController]
})
export class ReciboModule {}
