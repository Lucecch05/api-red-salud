import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { VendedorDto } from './dto/vendedor.dto';
import { Vendedor } from './vendedor.entity';
import { VendedorRepository } from './vendedor.repository';

@Injectable()
export class VendedorService {
    constructor(
        @InjectRepository(VendedorRepository)
        private readonly _vendedorRepository: VendedorRepository,
        private readonly _mapperService: MapperService,
    ){}

    async get(id: number): Promise<VendedorDto> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const vendedor: Vendedor = await this._vendedorRepository.findOne(id);

        if(!vendedor){
            throw new NotFoundException();
        }

        return this._mapperService.map<Vendedor, VendedorDto>(vendedor, new VendedorDto());

    }

    async getAll(): Promise<VendedorDto> {
        
        const vendedores: Vendedor[] = await this._vendedorRepository.find();

        
        return this._mapperService.mapCollection<Vendedor, VendedorDto>(vendedores, new VendedorDto());

    }

    async create(vendedor: Vendedor): Promise<VendedorDto>{
        const savedVendedor: Vendedor = await this._vendedorRepository.save(vendedor);
        return this._mapperService.map<Vendedor, VendedorDto>(vendedor, new VendedorDto());
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
