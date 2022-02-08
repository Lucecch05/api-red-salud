import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Vendedor } from './vendedor.entity';
import { VendedorService } from './vendedor.service';

@Controller('vendedor')
export class VendedorController {
    constructor(private readonly _vendedorService: VendedorService){}

    @Get(':id')
    async getVendedor(@Param('id',ParseIntPipe) id: number): Promise<Vendedor>{
        const vendedor = await this._vendedorService.get(id);
        return vendedor;
      
    }

    @Get()
    async getVendedors(): Promise<Vendedor[]>{
        const vendedores: Vendedor[] = await this._vendedorService.getAll();
        return vendedores;
    }

    @Post()
    async createVendedor(@Body() vendedor: Vendedor): Promise<Vendedor>{
       const createdVendedor = await this._vendedorService.create(vendedor);
       return createdVendedor;

    }

    @Patch(':id')
    async updateVendedor(@Param('id',ParseIntPipe) id: number, @Body() vendedor: Vendedor){
       await this._vendedorService.update(id, vendedor);
        return true;
    }

    @Delete(':id')
    async deleteVendedor(@Param('id',ParseIntPipe) id: number){
        await this._vendedorService.delete(id);
        return true;
    }
}