import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Prestador } from './prestador.entity';
import { PrestadorService } from './prestador.service';

@Controller('prestador')
export class PrestadorController {
    constructor(private readonly _prestadorService: PrestadorService){}

    @Get(':id')
    async getPrestador(@Param('id',ParseIntPipe) id: number): Promise<Prestador>{
        const prestador = await this._prestadorService.get(id);
        return prestador;
      
    }

    @Get()
    async getPrestadors(): Promise<Prestador[]>{
        const prestadors: Prestador[] = await this._prestadorService.getAll();
        return prestadors;
    }

    @Post()
    async createPrestador(@Body() prestador: Prestador): Promise<Prestador>{
       const createdPrestador = await this._prestadorService.create(prestador);
       return createdPrestador;

    }

    @Patch(':id')
    async updatePrestador(@Param('id',ParseIntPipe) id: number, @Body() prestador: Prestador){
       await this._prestadorService.update(id, prestador);
        return true;
    }

    @Delete(':id')
    async deletePrestador(@Param('id',ParseIntPipe) id: number){
        await this._prestadorService.delete(id);
        return true;
    }
}
