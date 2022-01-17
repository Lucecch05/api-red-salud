import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { PrestacionRepository } from './prestacion.repository';
import { PrestacionService } from './prestacion.service';

@Module({
    imports: [TypeOrmModule.forFeature([PrestacionRepository]), SharedModule],
    providers: [PrestacionService]
})
export class PrestacionModule {}
