import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendedor } from './vendedor.entity';
import { VendedorRepository } from './vendedor.repository';

@Injectable()
export class VendedorService {
    constructor(
        @InjectRepository(VendedorRepository)
        private readonly _vendedorRepository: VendedorRepository,
        
    ){}

    async get(id: number): Promise<Vendedor> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const vendedor: Vendedor = await this._vendedorRepository.findOne(id);

        if(!vendedor){
            throw new NotFoundException();
        }

        return vendedor;

    }

    async getAll(): Promise<Vendedor[]> {
        
        const vendedores: Vendedor[] = await this._vendedorRepository.find();

        
        return vendedores;

    }

    async create(vendedor: Vendedor): Promise<Vendedor>{
        const savedVendedor: Vendedor = await this._vendedorRepository.save(vendedor);
        return savedVendedor;
    }

    async update(id: number, vendedor: Vendedor): Promise<void>{
        await this._vendedorRepository.update(id, vendedor);
        
    }

    async delete(id: number): Promise<void>{
        const vendedorExist = await this._vendedorRepository.findOne(id);

        if(!vendedorExist){
            throw new NotFoundException();
        }

        await this._vendedorRepository.delete(id);
    }
}
