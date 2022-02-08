import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { VendedorRepository } from './vendedor.repository';
import { VendedorService } from './vendedor.service';
import { VendedorController } from './vendedor.controller';

@Module({
    imports: [TypeOrmModule.forFeature([VendedorRepository]), SharedModule],
    providers: [VendedorService],
    controllers: [VendedorController]
})
export class VendedorModule {}
