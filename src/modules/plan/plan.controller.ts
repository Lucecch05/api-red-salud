import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Plan } from './plan.entity';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {
    constructor(private readonly _planService: PlanService){}

    @Get(':id')
    async getPlan(@Param('id',ParseIntPipe) id: number): Promise<Plan>{
        const plan = await this._planService.get(id);
        return plan;
      
    }

    @Get()
    async getPlans(): Promise<Plan[]>{
        const planes: Plan[] = await this._planService.getAll();
        return planes;
    }

    @Post()
    async createPlan(@Body() plan: Plan): Promise<Plan>{
       const createdPlan = await this._planService.create(plan);
       return createdPlan;

    }

    @Patch(':id')
    async updatePlan(@Param('id',ParseIntPipe) id: number, @Body() plan: Plan){
       await this._planService.update(id, plan);
        return true;
    }

    @Delete(':id')
    async deletePlan(@Param('id',ParseIntPipe) id: number){
        await this._planService.delete(id);
        return true;
    }
}
