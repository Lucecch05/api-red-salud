import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { PersonaRepository } from './persona.repository';
import { PersonaService } from './persona.service';

@Module({
    imports: [TypeOrmModule.forFeature([PersonaRepository]), SharedModule],
    providers: [PersonaService]
})
export class PersonaModule {}
