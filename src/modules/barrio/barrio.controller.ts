import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Barrio } from './barrio.entity';
import { BarrioService } from './barrio.service';

@Controller('barrio')
export class BarrioController {
    constructor(private readonly _barrioService: BarrioService){}

    @Get(':id')
    async getBarrio(@Param('id',ParseIntPipe) id: number): Promise<Barrio>{
        const barrio = await this._barrioService.get(id);
        return barrio;
      
    }

    @Get()
    async getBarrios(): Promise<Barrio[]>{
        const barrios: Barrio[] = await this._barrioService.getAll();
        return barrios;
    }

    @Post()
    async createBarrio(@Body() barrio: Barrio): Promise<Barrio>{
       const createdBarrio = await this._barrioService.create(barrio);
       return createdBarrio;

    }

    @Patch(':id')
    async updateBarrio(@Param('id',ParseIntPipe) id: number, @Body() barrio: Barrio){
       await this._barrioService.update(id, barrio);
        return true;
    }

    @Delete(':id')
    async deleteBarrio(@Param('id',ParseIntPipe) id: number){
        await this._barrioService.delete(id);
        return true;
    }
}