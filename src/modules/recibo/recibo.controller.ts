import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Recibo } from './recibo.entity';
import { ReciboService } from './recibo.service';

@Controller('recibo')
export class ReciboController {
    constructor(private readonly _reciboService: ReciboService){}

    @Get(':id')
    async getRecibo(@Param('id',ParseIntPipe) id: number): Promise<Recibo>{
        const recibo = await this._reciboService.get(id);
        return recibo;
      
    }

    @Get()
    async getRecibos(): Promise<Recibo[]>{
        const recibos: Recibo[] = await this._reciboService.getAll();
        return recibos;
    }

    @Post()
    async createRecibo(@Body() recibo: Recibo): Promise<Recibo>{
       const createdRecibo = await this._reciboService.create(recibo);
       return createdRecibo;

    }

    @Patch(':id')
    async updateRecibo(@Param('id',ParseIntPipe) id: number, @Body() recibo: Recibo){
       await this._reciboService.update(id, recibo);
        return true;
    }

    @Delete(':id')
    async deleteRecibo(@Param('id',ParseIntPipe) id: number){
        await this._reciboService.delete(id);
        return true;
    }

}
