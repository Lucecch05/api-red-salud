import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { AfiliadoRepository } from './afiliado.repository';
import { AfiliadoService } from './afiliado.service';
import { AfiliadoController } from './afiliado.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AfiliadoRepository]), SharedModule],
    providers: [AfiliadoService],
    controllers: [AfiliadoController]
})
export class AfiliadoModule {}
