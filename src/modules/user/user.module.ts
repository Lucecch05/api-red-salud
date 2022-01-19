import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
   imports: [TypeOrmModule.forFeature([UserRepository])],
   providers: [UserService],
   controllers: [UserController]

})
export class UserModule {}
