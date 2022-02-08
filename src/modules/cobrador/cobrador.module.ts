import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { CobradorRepository } from './cobrador.repository';
import { CobradorService } from './cobrador.service';
import { CobradorController } from './cobrador.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CobradorRepository]), SharedModule],
    providers: [CobradorService],
    controllers: [CobradorController]
})
export class CobradorModule {}
