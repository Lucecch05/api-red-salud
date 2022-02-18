import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { Detalle_Afiliado } from "./detalle_afilliado.entity";
import { DetalleAfiliadoService } from "./detalle_afilliado.service";

@Controller('detalle_afiliado')
export class DetalleAfiliadoController {
    constructor(private readonly _detalleAfiliadoRepository: DetalleAfiliadoService){}


        @Get('/:id')
        async getAfiliado(@Param('id',ParseIntPipe) id: number): Promise<Detalle_Afiliado>{
            const afiliado = await this._detalleAfiliadoRepository.get(id);
            return afiliado;
        }

        @Get()
        async getDetallesAfiliados(): Promise<Detalle_Afiliado[]>{
            const detalles: Detalle_Afiliado[] = await this._detalleAfiliadoRepository.getAll();
            return detalles;
        }

        @Post()
        async createDetalleAfiliado(@Body() detalle: Detalle_Afiliado): Promise<Detalle_Afiliado>{
           const createdDetalleAfiliado = await this._detalleAfiliadoRepository.create(detalle);
           return createdDetalleAfiliado;

        }

        @Patch(':id')
        async updateAfiliado(@Param('id',ParseIntPipe) id: number, @Body() detalle: Detalle_Afiliado){
           await this._detalleAfiliadoRepository.update(id, detalle);
            return true;
        }

        @Delete(':id')
        async deleteAfiliado(@Param('id',ParseIntPipe) id: number){
            await this._detalleAfiliadoRepository.delete(id);
            return true;
        }


   


}
