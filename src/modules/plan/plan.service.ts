import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { PlanDto } from './dto/plan.dto';
import { Plan } from './plan.entity';
import { PlanRepository } from './plan.repository';

@Injectable()
export class PlanService {
    constructor(
        @InjectRepository(PlanRepository)
        private readonly _planRepository: PlanRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<PlanDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const plan: Plan = await this._planRepository.findOne(id);

        if(!plan){
            throw new NotFoundException();
        }

        return this._mapperService.map<Plan, PlanDto>(plan, new PlanDto());

    }

    async getAll(): Promise<PlanDto> {
        
        const planes: Plan[] = await this._planRepository.find();

        
        return this._mapperService.mapCollection<Plan, PlanDto>(planes, new PlanDto());

    }

    async create(plan: Plan): Promise<PlanDto>{
        const savedPlan: Plan = await this._planRepository.save(plan);
        return this._mapperService.map<Plan, PlanDto>(plan, new PlanDto());
    }

    async update(id: number, plan: Plan): Promise<void>{
        await this._planRepository.update(id, plan);
        
    }

    async delete(id: number): Promise<void>{
        const planExist = await this._planRepository.findOne(id);

        if(!planExist){
            throw new NotFoundException();
        }

        await this._planRepository.delete(id);
    }

}