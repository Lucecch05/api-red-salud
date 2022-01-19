import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { CobradorRepository } from './cobrador.repository';
import { CobradorService } from './cobrador.service';

@Module({
    imports: [TypeOrmModule.forFeature([CobradorRepository]), SharedModule],
    providers: [CobradorService]
})
export class CobradorModule {}
