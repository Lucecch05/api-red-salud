import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { PlanRepository } from './plan.repository';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PlanRepository]), SharedModule],
    providers: [PlanService],
    controllers: [PlanController]
})
export class PlanModule {}
