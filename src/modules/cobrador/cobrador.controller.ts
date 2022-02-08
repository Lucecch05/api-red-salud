import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Cobrador } from './cobrador.entity';
import { CobradorService } from './cobrador.service';

@Controller('cobrador')
export class CobradorController {
    constructor(private readonly _cobradorService: CobradorService){}

    @Get(':id')
    async getCobrador(@Param('id',ParseIntPipe) id: number): Promise<Cobrador>{
        const cobrador = await this._cobradorService.get(id);
        return cobrador;
      
    }

    @Get()
    async getCobradors(): Promise<Cobrador[]>{
        const cobradores: Cobrador[] = await this._cobradorService.getAll();
        return cobradores;
    }

    @Post()
    async createCobrador(@Body() cobrador: Cobrador): Promise<Cobrador>{
       const createdCobrador = await this._cobradorService.create(cobrador);
       return createdCobrador;

    }

    @Patch(':id')
    async updateCobrador(@Param('id',ParseIntPipe) id: number, @Body() cobrador: Cobrador){
       await this._cobradorService.update(id, cobrador);
        return true;
    }

    @Delete(':id')
    async deleteCobrador(@Param('id',ParseIntPipe) id: number){
        await this._cobradorService.delete(id);
        return true;
    }
}