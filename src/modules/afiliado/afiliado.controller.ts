import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import { Afiliado } from './afiliado.entity';
import { AfiliadoService } from './afiliado.service';

@Controller('afiliado')
export class AfiliadoController {
    constructor(private readonly _afiliadoService: AfiliadoService){}

        //CUSTOMS
        @Get('/all')
        async getAllAfiliado() {
            const afiliados = await this._afiliadoService.getAllAfiliados();
            return afiliados;
        }

        @Get('/:id')
        async getAfiliado(@Param('id',ParseIntPipe) id: number): Promise<Afiliado>{
            const afiliado = await this._afiliadoService.get(id);
            return afiliado;
          
        }

      

        @Get()
        async getAfiliados(): Promise<Afiliado[]>{
            const afiliados: Afiliado[] = await this._afiliadoService.getAll();
            return afiliados;
        }

        @Post()
        async createAfiliado(@Body() afiliado: Afiliado): Promise<Afiliado>{
           const createdAfiliado = await this._afiliadoService.create(afiliado);
           return createdAfiliado;

        }

        @Patch(':id')
        async updateAfiliado(@Param('id',ParseIntPipe) id: number, @Body() afiliado: Afiliado){
           await this._afiliadoService.update(id, afiliado);
            return true;
        }

        @Delete(':id')
        async deleteAfiliado(@Param('id',ParseIntPipe) id: number){
            await this._afiliadoService.delete(id);
            return true;
        }


   


}
