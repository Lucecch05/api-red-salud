import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './plan.entity';
import { PlanRepository } from './plan.repository';

@Injectable()
export class PlanService {
    constructor(
        @InjectRepository(PlanRepository)
        private readonly _planRepository: PlanRepository,
        
    ){}

    async get(id: number): Promise<Plan> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const plan: Plan = await this._planRepository.findOne(id);

        if(!plan){
            throw new NotFoundException();
        }

        return plan;

    }

    async getAll(): Promise<Plan[]> {
        
        const planes: Plan[] = await this._planRepository.find();

        
        return planes;

    }

    async create(plan: Plan): Promise<Plan>{
        const savedPlan: Plan = await this._planRepository.save(plan);
        return savedPlan;
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