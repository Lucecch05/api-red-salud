import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { DescuentoRepository } from './descuento.repository';
import { DescuentoService } from './descuento.service';

@Module({
    imports: [TypeOrmModule.forFeature([DescuentoRepository]), SharedModule],
    providers: [DescuentoService]
})
export class DescuentoModule {}
