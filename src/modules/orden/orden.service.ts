import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orden } from './orden.entity';
import { OrdenRepository } from './orden.repository';

@Injectable()
export class OrdenService {
    constructor(
        @InjectRepository(OrdenRepository)
        private readonly _ordenRepository: OrdenRepository,
        
    ){}

    async get(id: number): Promise<Orden> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const orden: Orden = await this._ordenRepository.findOne(id);

        if(!orden){
            throw new NotFoundException();
        }

        return orden;

    }

    async getAll(): Promise<Orden[]> {
        
        const ordenes: Orden[] = await this._ordenRepository.find();

        
        return ordenes;

    }

    async create(orden: Orden): Promise<Orden>{
        const savedOrden: Orden = await this._ordenRepository.save(orden);
        return savedOrden;
    }

    async update(id: number, orden: Orden): Promise<void>{
        await this._ordenRepository.update(id, orden);
        
    }

    async delete(id: number): Promise<void>{
        const ordenExist = await this._ordenRepository.findOne(id);

        if(!ordenExist){
            throw new NotFoundException();
        }

        await this._ordenRepository.delete(id);
    }

}