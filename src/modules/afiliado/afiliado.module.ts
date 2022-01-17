import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { AfiliadoRrepository } from './afiliado.repository';
import { AfiliadoService } from './afiliado.service';

@Module({
    imports: [TypeOrmModule.forFeature([AfiliadoRrepository]), SharedModule],
    providers: [AfiliadoService]
})
export class AfiliadoModule {}
