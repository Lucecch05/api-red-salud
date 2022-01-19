import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { PlanRepository } from './plan.repository';
import { PlanService } from './plan.service';

@Module({
    imports: [TypeOrmModule.forFeature([PlanRepository]), SharedModule],
    providers: [PlanService]
})
export class PlanModule {}
