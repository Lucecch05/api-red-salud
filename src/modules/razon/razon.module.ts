import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { RazonRepository } from './razon.repository';
import { RazonService } from './razon.service';

@Module({
    imports: [TypeOrmModule.forFeature([RazonRepository]), SharedModule],
    providers: [RazonService]
})
export class RazonModule {}
