import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { CajaRepository } from './caja.repository';
import { CajaService } from './caja.service';

@Module({
    imports: [TypeOrmModule.forFeature([CajaRepository]), SharedModule],
    providers: [CajaService]
})
export class CajaModule {}
