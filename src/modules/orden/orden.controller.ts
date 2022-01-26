import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Orden } from './orden.entity';
import { OrdenService } from './orden.service';

@Controller('orden')
export class OrdenController {
    constructor(private readonly _ordenService: OrdenService){}

    @Get(':id')
    async getOrden(@Param('id',ParseIntPipe) id: number): Promise<Orden>{
        const orden = await this._ordenService.get(id);
        return orden;
      
    }

    @Get()
    async getOrdens(): Promise<Orden[]>{
        const ordens: Orden[] = await this._ordenService.getAll();
        return ordens;
    }

    @Post()
    async createOrden(@Body() orden: Orden): Promise<Orden>{
       const createdOrden = await this._ordenService.create(orden);
       return createdOrden;

    }

    @Patch(':id')
    async updateOrden(@Param('id',ParseIntPipe) id: number, @Body() orden: Orden){
       await this._ordenService.update(id, orden);
        return true;
    }

    @Delete(':id')
    async deleteOrden(@Param('id',ParseIntPipe) id: number){
        await this._ordenService.delete(id);
        return true;
    }
}
