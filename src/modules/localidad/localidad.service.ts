import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Localidad } from './localidad.entity';
import { LocalidadRepository } from './localidad.repository';

@Injectable()
export class LocalidadService {
    constructor(
        @InjectRepository(LocalidadRepository)
        private readonly _localidadRepository: LocalidadRepository,
        
    ){}

    async get(id: number): Promise<Localidad> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const localidad: Localidad = await this._localidadRepository.findOne(id);

        if(!localidad){
            throw new NotFoundException();
        }

        return localidad;

    }

    async getAll(): Promise<Localidad[]> {
        
        const localidades: Localidad[] = await this._localidadRepository.find();

        
        return localidades;

    }

    async create(localidad: Localidad): Promise<Localidad>{
        const savedLocalidad: Localidad = await this._localidadRepository.save(localidad);
        return savedLocalidad;
    }

    async update(id: number, localidad: Localidad): Promise<void>{
        await this._localidadRepository.update(id, localidad);
        
    }

    async delete(id: number): Promise<void>{
        const localidadExist = await this._localidadRepository.findOne(id);

        if(!localidadExist){
            throw new NotFoundException();
        }

        await this._localidadRepository.delete(id);
    }

}