import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestacion } from './prestacion.entity';
import { PrestacionRepository } from './prestacion.repository';

@Injectable()
export class PrestacionService {
    constructor(
        @InjectRepository(PrestacionRepository)
        private readonly _prestacionRepository: PrestacionRepository,
        
    ){}

    async get(id: number): Promise<Prestacion> {
        if(!id){
            throw new BadRequestException('id must be sent');
        }

        const prestacion: Prestacion = await this._prestacionRepository.findOne(id);

        if(!prestacion){
            throw new NotFoundException();
        }

        return prestacion;

    }

    async getAll(): Promise<Prestacion[]> {
        
        const prestaciones: Prestacion[] = await this._prestacionRepository.find();

        
        return prestaciones;

    }

    async create(prestacion: Prestacion): Promise<Prestacion>{
        const savedPrestacion: Prestacion = await this._prestacionRepository.save(prestacion);
        return savedPrestacion;
    }

    async update(id: number, prestacion: Prestacion): Promise<void>{
        await this._prestacionRepository.update(id, prestacion);
        
    }

    async delete(id: number): Promise<void>{
        const prestacionExist = await this._prestacionRepository.findOne(id);

        if(!prestacionExist){
            throw new NotFoundException();
        }

        await this._prestacionRepository.delete(id);
    }

}