import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { RolRepository } from './role.repository';
import { RolService } from './role.service';
import { RolController } from './role.controller';


@Module({
    imports: [TypeOrmModule.forFeature([RolRepository]), SharedModule],
    providers: [RolService],
    controllers: [RolController]
})
export class RoleModule {}
