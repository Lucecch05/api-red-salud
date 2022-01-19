import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Descuento } from './descuento.entity';
import { DescuentoRepository } from './descuento.repository';

@Injectable()
export class DescuentoService {
    constructor(
        @InjectRepository(DescuentoRepository)
        private readonly _descuentoRepository: DescuentoRepository,
        
    ){}

    async get(id: number): Promise<Descuento> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const descuento: Descuento = await this._descuentoRepository.findOne(id);

        if(!descuento){
            throw new NotFoundException();
        }

        return descuento;

    }

    async getAll(): Promise<Descuento[]> {
        
        const descuentos: Descuento[] = await this._descuentoRepository.find();

        
        return descuentos;

    }

    async create(descuento: Descuento): Promise<Descuento>{
        const savedDescuento: Descuento = await this._descuentoRepository.save(descuento);
        return savedDescuento;
    }

    async update(id: number, descuento: Descuento): Promise<void>{
        await this._descuentoRepository.update(id, descuento);
        
    }

    async delete(id: number): Promise<void>{
        const descuentoExist = await this._descuentoRepository.findOne(id);

        if(!descuentoExist){
            throw new NotFoundException();
        }

        await this._descuentoRepository.delete(id);
    }

}
