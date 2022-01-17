import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'src/shared/shared.module';
import { RolRepository } from './role.repository';
import { RolService } from './role.service';


@Module({
    imports: [TypeOrmModule.forFeature([RolRepository]), SharedModule],
    providers: [RolService]
})
export class RoleModule {}
