import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Localidad } from './localidad.entity';
import { LocalidadService } from './localidad.service';

@Controller('localidad')
export class LocalidadController {
    constructor(private readonly _localidadService: LocalidadService){}

    @Get(':id')
    async getLocalidad(@Param('id',ParseIntPipe) id: number): Promise<Localidad>{
        const localidad = await this._localidadService.get(id);
        return localidad;
      
    }

    @Get()
    async getLocalidads(): Promise<Localidad[]>{
        const localidades: Localidad[] = await this._localidadService.getAll();
        return localidades;
    }

    @Post()
    async createLocalidad(@Body() localidad: Localidad): Promise<Localidad>{
       const createdLocalidad = await this._localidadService.create(localidad);
       return createdLocalidad;

    }

    @Patch(':id')
    async updateLocalidad(@Param('id',ParseIntPipe) id: number, @Body() localidad: Localidad){
       await this._localidadService.update(id, localidad);
        return true;
    }

    @Delete(':id')
    async deleteLocalidad(@Param('id',ParseIntPipe) id: number){
        await this._localidadService.delete(id);
        return true;
    }
}